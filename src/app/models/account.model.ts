export interface AccounDetails {
  accountId:     string;
  balance:       number;
  currentPage:   number;
  totalPages:    number;
  size:          number;
  operationDTOs: AccountOperations[];
}

export interface AccountOperations {
  id:            number;
  operationDate: Date;
  amount:        number;
  type:          string;
  description:   null;
}
