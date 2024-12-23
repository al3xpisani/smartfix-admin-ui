export interface Results {
  data: Category[];
  links: Links;
  meta: Meta;
}
export interface Result {
  data: Category;
  links: Links;
  meta: Meta;
}
export interface Category {
  id: string;
  name: string;
  description: null | string;
  is_active: boolean;
  created_at: null | string;
  updated_at: null | string;
  deleted_at: null | string;
}

export interface Links {
  first: string;
  last: string;
  prev: null;
  next: string;
}

export interface Meta {
  current_page: number;
  from: number;
  last_page: number;
  path: string;
  per_page: number;
  to: number;
  total: number;
}
