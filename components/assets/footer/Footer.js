import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'

const Footer = () => (
  <div className="footer">
    <div className="footer_a">
        <motion.div
            className="logowrapper"
        animate={{ scale: 1 }}
      whileHover={{ scale: 1.2}}>
    <Image
      src="/../public/logo/logo150.png"
      width={80}
      height={80}
      alt={"Tragödie Design"}>
    </Image>
        </motion.div>
      <h3>Tragödie Design</h3>
      <p> © Todos os direitos reservados 2022 <br/>contato: brunofernando@tragodiedesign.com.br</p>
    </div>
    <div className="footer_b">
      <h3>Título</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      </p>
    </div>


  </div>
);
export default Footer
