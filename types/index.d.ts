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

/* Helpers */
declare type TSortOption = "date" | "price";
declare type TSortOrderOption = "asc" | "desc";

declare type TUnitStatus =
  | "approved"
  | "pending"
  | "reserved"
  | "rejected"
  | "sold";

declare type TLangOption = "en" | "ar";

/* Main */
declare type TUnit = {
  id: string;

  name: string;

  address: string;
  coverUrl: string;

  space: number;
  bedroomsNumber: number;
  bathroomsNumber: number;

  status: TUnitStatus;

  price: number;

  createdAt: string;
};

declare type TNavigationItem<TIcon> = {
  title: string;
  href: string;
  icon?: TIcon;
};

/* Store */
declare type TUnitsStore = {
  sortBy: TSortOption;
  sortOrder: TSortOrderOption;

  page: number;
  limit: number;

  total: number;

  setSortOrder: (sortOrder: TSortOrderOption) => void;
  setSortBy: (sort: TSortOption) => void;

  setPage: (page: number) => void;
  setLimit: (limit: number) => void;

  setTotal: (total: number) => void;
};

declare type TLangStore = {
  lang: TLangOption;
  setLang: (lang: TLangOption) => void;
};
