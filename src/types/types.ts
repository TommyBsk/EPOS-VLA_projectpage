export type Author = {
  name: string;
  url?: string;
  institution?: string;
  notes?: string[];
};

export type Link = {
  name: string;
  icon?: string;
  /** When set, the control is non-interactive (e.g. coming soon). */
  disabled?: boolean;
  url?: string;
  /** Tooltip when `disabled` is true. */
  hint?: string;
};

export type Note = {
  symbol: string;
  text: string;
};
