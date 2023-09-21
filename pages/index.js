import {createUseStyles} from 'react-jss'
import Link from 'next/link'


const useStyles = createUseStyles ({
  name: {
    position: 'absolute',
    textAlign: 'center',
    backgroundColor: 'white',
    padding: '2.6rem 5.5rem',
    color: '#00301E',
    fontSize: '2.5rem',
  },
  text1: {
    position: 'absolute',
    textAlign: 'left',
    padding: '13rem 10rem',
  },
  screen: {
    width: '90rem',
    height: '51rem',
  },
  links: {
    position: 'absolute',
    top: '3rem',
    right: '3rem',
    color: 'white',
  },
  centered: {
    position:'relative',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontFamily: 'PT Sans',
  },
  aboutpg: {
    position:'relative',
    display: 'flex',
    flexDirection: 'column',
    fontFamily: 'PT Sans',
  },
  knowMe: {
    color: '#A4C3A0',
    fontSize: '2.5rem',
  },
  explan: {
    color: '#D2D6DF',
    fontSize: '2rem',
    maxWidth: '28rem',
    lineHeight: '2.8rem',
  },
  info: {
    position:'relative',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontFamily: 'PT Sans',
    flexDirection: 'column',
  },
  infotxt: {
    position: 'absolute',
    textAlign: 'center',
    backgroundColor: 'white',
    padding: '2.6rem 5.5rem',
    color: '#00301E',
    fontSize: '1rem',
    display: 'flex',
    flexDirection: 'row',
  },
  ig1: {
    zoom: 0.5,
  },
  txt: {
    maxWidth: '20rem',
  },
  icons: {
    //zoom: 0.3,
    maxWidth: '2rem',
  }
})

const MyApp = () => {
  const classes = useStyles()
  return (
    <>
      <section>
          <div className={classes.centered}>
            <img className={classes.screen} src="https://cdn.discordapp.com/attachments/837410508075827240/892253401679806484/unknown.png" alt="artwork" />
            <h1 className={classes.name}>Maya Wong</h1>
          </div>
          <div className={classes.links}>
            <Link href="/contact"><a>Contact</a></Link>
            <Link href="/about"><a>About</a></Link>
          </div>
      </section>

      <section>
        <div className={classes.aboutpg}>
          <img className={classes.screen} src="https://cdn.discordapp.com/attachments/837410508075827240/895395553473609728/unknown.png"/>
          <div className={classes.text1}>
            <h2 className={classes.knowMe}>Get to know me</h2>
            <p className={classes.explan}>Welcome to my personal website. Keep scrolling to learn more about me. </p>
          </div>
        </div>
      </section>

      <section>
        <div className={classes.centered}>
          <img className={classes.screen} src="https://cdn.discordapp.com/attachments/837410508075827240/895404974857650176/unknown.png"/>
          <div className={classes.infotxt}>
            <div className={classes.info}>
              <img className={classes.ig1} src="https://cdn.discordapp.com/attachments/837410508075827240/895430617540460564/unknown.png"/>
              <h2>Computer Science</h2>
              <p className={classes.txt}>Studying CS with a concentration in Internet Security at Carleton University</p>
            </div>

            <div className={classes.info}>
              <img className={classes.ig1} src="https://cdn.discordapp.com/attachments/837410508075827240/895430559298367488/unknown.png"/>
              <h2>CRA</h2>
              <p className={classes.txt} >Working as a COOP Student at Canada Revenue Agency as an IT Developer</p>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className={classes.centered}>
          <img className={classes.screen} src="https://cdn.discordapp.com/attachments/837410508075827240/895439516196798474/unknown.png"/>
          <div className={classes.infotxt}>
            <div className={classes.info}>
              <img className={classes.ig1} src="https://cdn.discordapp.com/attachments/837410508075827240/895440075771498546/unknown.png"/>
              <h2>Ambassadors</h2>
              <p className={classes.txt}>Coded as a Frontend Developer at Ambassadors Media startup</p>
            </div>

            <div className={classes.info}>
              <img className={classes.ig1} src="https://cdn.discordapp.com/attachments/837410508075827240/895440471248240700/unknown.png"/>
              <h2>Technolgap</h2>
              <p className={classes.txt}>Member of Web Dev Team as a Frontend Developer, Inclusion Team, and Mentor</p>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className={classes.centered}>
          <img className={classes.screen} src="https://cdn.discordapp.com/attachments/837410508075827240/899114487548891196/unknown.png"/>
          <div className={classes.infotxt}>
            <div className={classes.info}>
              <img className={classes.ig1} src="https://cdn.discordapp.com/attachments/837410508075827240/899114801115045918/unknown.png"/>
              <h2>Technovation</h2>
              <p className={classes.txt}>Pitched "Talk2Me" app with business plan and edited video commercial</p>
            </div>

            <div className={classes.info}>
              <img className={classes.ig1} src="https://cdn.discordapp.com/attachments/837410508075827240/899114939732606986/unknown.png"/>
              <h2>City of Ottawa</h2>
              <p className={classes.txt}>Worked as a Swim Instructor, Lifeguard, and COVID-19 Screener</p>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className={classes.aboutpg}>
          <img className={classes.screen} src="https://cdn.discordapp.com/attachments/837410508075827240/899116046919802930/unknown.png"/>
            <div className={classes.text1}>
              <h2 className={classes.knowMe}>Contact Me</h2>
              <p className={classes.explan}>Email: mayajwong8@gmail.com Discord: mw#7176</p>
            </div>
            {/* <div className={classes.icons}>
              <img src="https://cdn.discordapp.com/attachments/837410508075827240/903339771135426570/Twitter-Symbol.png"></img>
              <img src="https://cdn.discordapp.com/attachments/837410508075827240/903339803498643456/174857.png"></img>
            </div> */}
        </div>
        
      </section>
    </>
  )
}

export default MyApp;