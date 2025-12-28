import dayjs from 'dayjs';

import { navIcons, navLinks } from '#constants/index.ts';

const Navbar = () => {
  return (
    <nav>
      <div>
        <img src="/images/logo.svg" alt="logo" />
        <p className='font-bold'>Naveen 's Portfolio</p>

        <ul>
          {
            navLinks.map((i) => (
              <li key={i.id}>
                <p>{i.name}</p>
              </li>
            ))
          }
        </ul>

      </div>

      <div>
        <ul>
          {navIcons.map((i) => (
            <li key={i.id}>
              <img src={i.img} className="icon-hover" />
            </li>
          ))}
        </ul>

        <ul>
          <time>{dayjs().format('ddd MMM D h:mm A')}</time>
        </ul>


      </div>



    </nav>
  )
}

export default Navbar