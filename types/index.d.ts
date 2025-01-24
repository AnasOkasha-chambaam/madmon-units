/* 
unit object example: {
  "createdAt": "2024-10-02T13:12:45.000000Z",
  "name": "name 2",
  "coverUrl": "https://img.freepik.com/free-photo/design-house-modern-villa-with-open-plan-living-private-bedroom-wing-large-terrace-with-privacy_1258-170466.jpg?t=st=1737223250~exp=1737226850~hmac=3e175797ac91fbc58598e2a37b2defc6f67a45fc4015b57665078caaefe5fcc4&w=996",
  "address": "Heliopolis, Egypt",
  "price": 270000000000,
  "bedroomsNumber": 2,
  "bathroomsNumber": 1,
  "space": 24,
  "status": "sold",
  "id": "2"
}
*/

declare type TUnit = {
  id: string;

  name: string;

  address: string;
  coverUrl: string;

  space: number;
  bedroomsNumber: number;
  bathroomsNumber: number;

  status: string;

  price: number;

  createdAt: string;
};

declare type TNavigationItem<TIcon> = {
  title: string;
  href: string;
  icon?: TIcon;
};
