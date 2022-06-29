
export interface AccountHistoryDTO {
  accountId:     string;
  balance:       number;
  currentPage:   number;
  totalPages:    number;
  size:          number;
  operationDTOs: OperationDTO[];
}

export interface OperationDTO {
  id:            number;
  operationDate: Date;
  amount:        number;
  type:          string;
  description:   string;
}
