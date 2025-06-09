// src/app/template.jsx
import PageTransitionWrapper from "@/components/common/PageTransitionWrapper";

export default function Template({ children }) {
  return <PageTransitionWrapper>{children}</PageTransitionWrapper>;
}
