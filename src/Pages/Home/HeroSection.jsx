import image1 from '../../assets/photo_2023-09-26_17-30-50.jpg';
import image2 from '../../assets/DesktopHome.jpg'
import image3 from '../../assets/desktop-preview.jpg'
import image4 from '../../assets/blog.jpg'


export default function HeroSection() {
  return (
    <section id='heroSection' className='hero--section'>
      <div className='hero--section--content--box'>
        <div className='hero--section--content'>
          <p className='section--title'>Hey, I'm Wale</p>
          <h1 className='hero--section--title'>
            <span className='hero--section-title--color'>A Front End</span> <br />
            Developer
          </h1>
          <p className='hero--section-description'>
          I'm deeply interested in web technology, problem-solving, and understanding how things work. Currently building with React, I thrive on challenges, finding innovative solutions, and delivering exceptional results.
            
          </p>
        </div>
        <button className='btn btn-primary'>
          <a href='https://github.com/WaleBnji'>Get In Touch</a>
        </button>
      </div>
      <div className='hero--section--img'>
        <img src={image1} alt='Hero Section' />
      </div>
    </section>
  );
}
