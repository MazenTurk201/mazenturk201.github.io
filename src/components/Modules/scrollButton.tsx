
import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { ArrowDown, ArrowUp, Loader2 } from "lucide-react";

const DURATION_DOWN = 12000; // 12 ثانية للنزول
const WAIT_TIME = 1000; // ثانيتين انتظار تحت
const DURATION_UP = 1000; // ثانية واحدة للطلوع

function smoothScrollTo(target: number, duration: number): Promise<void> {
  return new Promise((resolve) => {
    const start = window.scrollY;
    const distance = target - start;
    let startTime: number | null = null;

    if (Math.abs(distance) < 1) {
      resolve();
      return;
    }

    const animate = (currentTime: number) => {
      if (startTime === null) startTime = currentTime;

      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);

      // Ease In Out Cubic
      const eased =
        progress < 0.5
          ? 4 * Math.pow(progress, 3)
          : 1 - Math.pow(-2 * progress + 2, 3) / 2;

      // Instant مهم لمنع تعارض الحركة مع CSS scroll-smooth
      window.scrollTo({
        top: start + distance * eased,
        behavior: "instant",
      });

      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        resolve();
      }
    };

    requestAnimationFrame(animate);
  });
}

export default function ScrollButton() {
  const [scrolling, setScrolling] = useState(false);
  const [atBottom, setAtBottom] = useState(false);

  const lockRef = useRef(false);

  useEffect(() => {
    const handleWindowScroll = () => {
      if (lockRef.current) return;

      const maxScroll = Math.max(
        0,
        document.documentElement.scrollHeight - window.innerHeight
      );

      const isNearBottom = window.scrollY >= maxScroll - 50;

      setAtBottom(isNearBottom);
    };

    // تحديد الحالة الصحيحة عند تحميل المكون
    handleWindowScroll();

    window.addEventListener("scroll", handleWindowScroll, {
      passive: true,
    });

    window.addEventListener("resize", handleWindowScroll);

    return () => {
      window.removeEventListener("scroll", handleWindowScroll);
      window.removeEventListener("resize", handleWindowScroll);
    };
  }, []);

  const handleScroll = async () => {
    if (lockRef.current) return;

    lockRef.current = true;
    setScrolling(true);

    try {
      const maxScroll = Math.max(
        0,
        document.documentElement.scrollHeight - window.innerHeight
      );

      const currentIsNearBottom = window.scrollY >= maxScroll - 50;

      if (currentIsNearBottom) {
        // لو المستخدم تحت: يطلع فوق في ثانية
        await smoothScrollTo(0, DURATION_UP);
        setAtBottom(false);
      } else {
        // 1. النزول لآخر الصفحة في 12 ثانية
        await smoothScrollTo(
          Math.max(
            0,
            document.documentElement.scrollHeight - window.innerHeight
          ),
          DURATION_DOWN
        );

        setAtBottom(true);

        // 2. الانتظار ثانيتين تحت
        await new Promise((resolve) =>
          setTimeout(resolve, WAIT_TIME)
        );

        // 3. الرجوع للأعلى في ثانية واحدة
        await smoothScrollTo(0, DURATION_UP);

        setAtBottom(false);
      }
    } finally {
      setScrolling(false);
      lockRef.current = false;
    }
  };

  return (
    <motion.button
      type="button"
      onClick={handleScroll}
      disabled={scrolling}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      whileHover={!scrolling ? { scale: 1.1 } : undefined}
      whileTap={!scrolling ? { scale: 0.9 } : undefined}
      transition={{ duration: 0.2 }}
      className="
        fixed bottom-6 right-6 z-50
        flex h-12 w-12 items-center justify-center
        rounded-full border border-zinc-300
        bg-white/80 text-zinc-900 shadow-lg
        backdrop-blur-md transition-colors
        hover:bg-zinc-100
        disabled:cursor-wait
        dark:border-zinc-700
        dark:bg-zinc-900/80 dark:text-white
        dark:hover:bg-zinc-800
      "
      aria-label="Scroll to bottom and back to top"
      title={
        scrolling
          ? "جاري التمرير..."
          : atBottom
            ? "الرجوع للأعلى"
            : "النزول للأسفل"
      }
    >
      <AnimatePresence mode="wait" initial={false}>
        {scrolling ? (
          <motion.span
            key="loading"
            initial={{ opacity: 0, rotate: -90 }}
            animate={{ opacity: 1, rotate: 0 }}
            exit={{ opacity: 0, rotate: 90 }}
          >
            <Loader2 size={21} className="animate-spin" />
          </motion.span>
        ) : atBottom ? (
          <motion.span
            key="up"
            initial={{ opacity: 0, y: 5 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -5 }}
          >
            <ArrowUp size={22} />
          </motion.span>
        ) : (
          <motion.span
            key="down"
            initial={{ opacity: 0, y: -5 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 5 }}
          >
            <ArrowDown size={22} />
          </motion.span>
        )}
      </AnimatePresence>
    </motion.button>
  );
}
