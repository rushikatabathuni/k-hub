export interface Stat {
  value: number;
  suffix?: string;
  label: string;
}

export const stats: Stat[] = [
  { value: 400, suffix: "+", label: "Trained Learners" },
  { value: 6, label: "Deep-Tech Paradigms" },
  { value: 4, label: "Campus Partners" },
  { value: 9, label: "Programs" }
];

export const campuses = [
  "KMIT",
  "NGIT", 
  "KMEC",
  "KMCE"
];
