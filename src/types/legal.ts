export interface LegalSection {
  title?: string;
  intro?: string;
  items?: string[];
}

export interface LegalData {
  sections: LegalSection[];
}

export interface LegalTranslations {
  lastUpdated: string;
  privacy: LegalData;
  terms: LegalData;
  cookies: LegalData;
}
