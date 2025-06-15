export interface DataRow {
  number: number;
  mod3: number;
  mod4: number;
  mod5: number;
  mod6: number;
}

export interface FilterOption {
  label: string;
  value: number;
}

export interface FilterState {
  [key: string]: number[];
}