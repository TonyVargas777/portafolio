import React from 'react'

export const Contacto = () => {
  return (
    <div className='education'>
      <h1 className='heading'>Contacto:</h1>
      <p align="center" className='redes'>
        <a
          href="https://linkedin.com/in/tony-vargas-garcía-122b1424b"
          target="blank" 
          background="transparent"         
        >
          <img
            align="center"
            src="https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/linked-in-alt.svg"
            alt="LinkedIn"
            height="40px"
            width="40px"
            
          margin-right="10px"
          ></img>
        </a>
        <a
          href="https://www.instagram.com/tonaco777/"
          alt="tony777."
          height="40px"
          width="40px"
        >
          <img
            align="center"
            src="https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/instagram.svg"
            alt="LinkedIn"
            height="40px"
            width="40px"
          ></img>
        </a>
        <a
          href="https://twitter.com/tonaco777"
          alt="tony777."
          height="40px"
          width="40px"
        >
          <img
            align="center"
            src="https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/twitter.svg"
            alt="LinkedIn"
            height="40px"
            width="40px"
          >            
          </img>
        </a>
        <a href="mailto:tonacovargas@hotmail.com" target="blank">
          <img
            align="center"
            src="https://us.123rf.com/450wm/mamanamsai/mamanamsai1501/mamanamsai150100386/35929070-email-icono-en-el-fondo-azul-limpio-vector.jpg"
            alt="tony777."
            height="40"
            width="40"
          ></img>{" "}
        </a>
      </p>
      <form className="contact" action="mailto:tonacovargas@hotmail.com">
        <input type="text" placeholder='Nombre'/>
        <input type="text" placeholder='Apellidos'/>
        <input type="text" placeholder='Email'/>
        <textarea placeholder='Motivo de contacto'></textarea>
        <input type="submit" value="Enviar" />
      </form>

    </div>
  )
}
 