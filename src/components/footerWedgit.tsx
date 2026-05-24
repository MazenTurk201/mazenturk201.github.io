import Logo from '../../src/assets/images/MT.png';
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from '@/components/animate-ui/components/radix/accordion';

function Footer() {
  return <footer>
    <div className='flex flex-col items-center justify-center text-left gap-3'>
      <img src={Logo} alt="Turk Logo" className="w-20 h-20" />
      <p>Thanks for visiting my portfolio! {"<3`"}</p>
      <p>&copy; {new Date().getFullYear()} Mazen Sameh. All rights reserved.</p>
    </div>
    <div className='w-90'>
      <p>Products:</p>
      <ul>
        <li>
          <a href="https://mazenturk201.github.io/Love-Choice">Love Choice</a>
        </li>
        <li>
          <a href="https://mazenturk201.github.io/Love-Choice">Love Choice</a>
        </li>
        <li>
          <a href="https://mazenturk201.github.io/Love-Choice">Love Choice</a>
        </li>
        <li>
          <a href="https://mazenturk201.github.io/Love-Choice">Love Choice</a>
        </li>
      </ul>
    </div>
    <div>
      <Accordion type="single" collapsible className='w-full'>
        <AccordionItem value={'1'}>
          <AccordionTrigger>How to contact?</AccordionTrigger>
          <AccordionContent>
            <div>Contact me via <a className='text-green-500' href="https://wa.me/201092130013?text=Hello+Turk">Whatsapp</a></div>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value={'2'}>
          <AccordionTrigger>Accordion Item 2</AccordionTrigger>
          <AccordionContent>
            <div>Accordion Content 2</div>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value={'3'}>
          <AccordionTrigger>Accordion Item 2</AccordionTrigger>
          <AccordionContent>
            <div>Accordion Content 2</div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  </footer>
};

export default Footer;