import { SiFacebook, SiInstagram, SiMessenger, SiTiktok } from 'react-icons/si';

const footerData = [
  {
    title: 'Explore',
    subTitle: [
      {
        title: 'Home',
        link: '/home',
      },
      {
        title: 'Shop',
        link: '/shop',
      },
      {
        title: 'Author',
        link: '/author',
      },
      {
        title: 'Blog',
        link: '/blog',
      },
    ],
  },
  {
    title: 'Customer Service',
    subTitle: [
      {
        title: 'Help Center',
        link: '/help_center',
      },
      {
        title: 'Returns',
        link: '/returns',
      },
      {
        title: 'About Us',
        link: '/about_us',
      },
      {
        title: 'Contact_us',
        link: '/contact_us',
      },
    ],
  },
  {
    title: 'Policy',
    subTitle: [
      {
        title: 'Return Policy',
        link: '/return_policy',
      },
      {
        title: 'Terms Of Use',
        link: '/terms_of_use',
      },
      {
        title: 'Security',
        link: '/security',
      },
      {
        title: 'Privacy',
        link: '/privacy',
      },
    ],
  },
  {
    title: 'Categories',
    subTitle: [
      {
        title: 'New Book',
        link: '/new_book',
      },
      {
        title: 'On Sale',
        link: '/on_sale',
      },
      {
        title: 'Most Reviewed',
        link: '/most_reviewed',
      },
      {
        title: 'Featured',
        link: '/featured',
      },
    ],
  },
];

const Footer = () => {
  <>
    <div className="px-12 py-12 text-lg border border-gray-300">
      <div className="grid justify-between w-full grid-cols-2 gap-10 py-5 mx-auto xl:grid-cols-6 lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-2 ">
        <div className="grid col-span-2 gap-y-3">
          <h3 className="text-2xl font-semibold">UEH STATIONERY</h3>
          <p className="">
            Ký túc xá Khu B Đại học Quốc gia TP.HCM, Đông Hoà, Dĩ An, Bình
            Dương
          </p>
          <div className="grid">
            <a href="mailto:nntam17052001@gmail.com">
              nntam17052001@gmail.com
            </a>
            <a href="tel:+84 334 193 816">+84 334 193 816</a>
          </div>
          <div className="grid grid-cols-4 w-[210px] gap-10">
            <button className="col-span-1" onClick={() => window.location.href = 'https://facebook.com'}>
              <SiFacebook className="w-full h-full"></SiFacebook>
            </button>
            <button href="#" className="col-span-1 ">
              <SiMessenger className="w-full h-full"></SiMessenger>
            </button>
            <button href="#" className="col-span-1">
              <SiInstagram className="w-full h-full"></SiInstagram>
            </button>
            <button href="#" className="col-span-1">
              <SiTiktok className="w-full h-full"></SiTiktok>
            </button>
          </div>
        </div>
        {footerData.map(
          (item, index) => (
            <div key={item.title} className="grid col-span-1 ">
              <h4 className="text-xl font-medium">{item.title}</h4>
              <ul className="space-y-2 ">
                {item.subTitle.map((subItem, subIndex) => (
                  <li
                    key={subItem.title}
                    className="hover:translate-x-[20px] transition-all duration-500"
                  >
                    <a href={subItem.link} className=" hover:text-orange-600">
                      {subItem.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          )
        )}
      </div>
    </div>
    <div className="px-12 border-b border-gray-300 border-x">
      <div className="grid items-center w-full grid-cols-3 py-5 mx-auto xl:grid-cols-10 lg:grid-cols-6 md:grid-cols-6 sm:grid-cols-3 gap-y-5">
        <p className="flex items-center justify-center col-span-4 text-lg text-center lg:col-start-2 xl:col-start-1 md:col-start-2">
          © {new Date().getFullYear()} Nhat Tam - Thanh Van. All rights
          reserved
        </p>
      </div>
    </div>
  </>
}

export default Footer;