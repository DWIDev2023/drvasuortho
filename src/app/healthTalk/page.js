import HealthTalk from "@/components/pages/HealthTalk";

export const metadata = {
  title: "Health Talk- Dr Vasudeva Juvvadi",
  description: "Vasudeva Juvvadi is a Best orthopaedic doctor practising at Citizens Hospital. He has a remarkable 22 years of experience in this field of orthopaedics.",
  keywords: "Health Talk session with Dr. Vasudeva Juvvadi",
  alternates: {
    canonical: 'https://www.drvasuortho.com/healthtalk',
  }
};

export default function Home() {
    return (
  <>
  <HealthTalk />
  
  </>
    );
  }
  