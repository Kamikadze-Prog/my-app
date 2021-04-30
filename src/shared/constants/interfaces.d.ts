interface ItemsType {
  userId: number;
  id: number;
  title: string;
  body: string;
}

interface ItemsProps {
  data: ItemsType[];
  type: string;
}

interface PagerType {
  totalItems: number;
  currentPage: number;
  pageSize: number;
  totalPages: number;
  startPage: number;
  endPage: number;
  startIndex: number;
  endIndex: number;
  pages: [];
}

interface Pager {
  pager: PagerType;
}
