import { useParams, Navigate } from "react-router-dom";
import { getConcept, getNextConcept } from "../data/concepts";
import {
  CaseHero,
  Statement,
  Principles,
  ImageBreak,
  Features,
  Senses,
  Sequence,
  Editorial,
  Vision,
  Flow,
  Modules,
  Impact,
  Opportunities,
  NextConcept,
  ConceptCTA,
} from "../components/concepts/blocks";

const BLOCKS = {
  statement: Statement,
  principles: Principles,
  image: ImageBreak,
  features: Features,
  senses: Senses,
  sequence: Sequence,
  editorial: Editorial,
  vision: Vision,
  flow: Flow,
  modules: Modules,
  impact: Impact,
  opportunities: Opportunities,
};

const CaseStudyPage = () => {
  const { slug } = useParams();
  const concept = getConcept(slug);
  if (!concept) return <Navigate to="/" replace />;

  return (
    <main data-testid={`case-study-${slug}`}>
      <CaseHero concept={concept} />
      {concept.sections.map((s, i) => {
        const Block = BLOCKS[s.type];
        return Block ? <Block key={i} {...s} /> : null;
      })}
      {concept.credits && (
        <p className="bg-ink px-6 sm:px-10 pb-4 text-center font-sans text-[11px] font-light text-cream/35 max-w-3xl mx-auto leading-relaxed">
          {concept.credits}
        </p>
      )}
      <NextConcept next={getNextConcept(slug)} />
      <ConceptCTA />
    </main>
  );
};

export default CaseStudyPage;
