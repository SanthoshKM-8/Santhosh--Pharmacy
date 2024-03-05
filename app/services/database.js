import Service from '@ember/service';
import { A } from '@ember/array';

export default Service.extend({
  medicines: A([
    {
      id: '1',
      name: 'Paracip',
      description: 'Used for fever',
      price: 3500,
    },
    {
      id: '2',
      name: 'Almox',
      description: 'Used for cold',
      price: 5000,
    },
  ]),
  cart: A([]),
  orders: A([]),
  blogs: A([
    {
      id: '2',
      title: 'New Blog',
      content:
        'Explore the world of wellness with Santhosh Pharmacy, your trusted online destination for pharmaceutical needs. Discover a seamless and convenient way to access high-quality medications, enjoy doorstep delivery, and prioritize your well-being. Join us on a journey towards a healthier, happier life.',
      category: 'new',
      comments: [
        {
          id: '11',
          username: 'Guest 1',
          content:
            'Santhosh Pharmacy has been a game-changer for me. Easy navigation, great discounts, and prompt delivery. It is become my go-to for all health-related needs!',
        },
        {
          id: '12',
          username: 'Guest 2',
          content:
            'I appreciate how Santhosh Pharmacy emphasizes user-friendly navigation. It makes ordering medications a breeze, especially for those who may not be tech-savvy. A reliable source for health essentials.',
        },
        {
          id: '13',
          username: 'Guest 3',
          content:
            'The commitment to quality at Santhosh Pharmacy is truly commendable. Knowing that they collaborate with reputable pharmaceutical manufacturers gives me confidence in the products I purchase.',
        },
      ],
    },
    {
      id: '1',
      title: 'Old Blog',
      content:
        'Step into a world of health and convenience with Santhosh Pharmacy, where your well-being takes center stage. From a diverse range of pharmaceuticals to expert guidance and reliable doorstep delivery, discover the ultimate healthcare experience. Join us on a journey towards a healthier, happier you.',
      category: 'old',
      comments: [
        {
          id: '21',
          username: 'Guest 1',
          content:
            'The speedy delivery service from Santhosh Pharmacy has been a lifesaver for me during emergencies. Knowing I can rely on them for quick relief gives me peace of mind.',
        },
        {
          id: '22',
          username: 'Guest 2',
          content:
            'Navigating the website is a breeze, and the detailed product information helps me make informed decisions. Santhosh Pharmacy truly understands the importance of an easy wellness journey.',
        },
      ],
    },
  ]),
});
