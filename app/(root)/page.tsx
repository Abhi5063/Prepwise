import Link from "next/link";
import Image from "next/image";

import { Button } from "@/components/ui/button";
import InterviewCard from "@/components/InterviewCard";

import { getCurrentUser } from "@/lib/actions/auth.action";
import {
  getInterviewsByUserId,
  getLatestInterviews,
} from "@/lib/actions/general.action";

async function Home() {
  const user = await getCurrentUser();

  const [userInterviews, allInterview] = await Promise.all([
    getInterviewsByUserId(user?.id!),
    getLatestInterviews({ userId: user?.id! }),
  ]);

  const hasPastInterviews = userInterviews?.length! > 0;
  const hasUpcomingInterviews = allInterview?.length! > 0;

  return (
    <>
      <section className="card-cta bento-item">
        <div className="flex flex-col gap-6 max-w-lg relative z-10">
          <h2 className="text-4xl lg:text-5xl font-black bg-clip-text text-transparent bg-gradient-to-r from-[var(--color-1)] to-[var(--color-2)]">
            Get Interview-Ready with AI-Powered Practice & Feedback
          </h2>
          <p className="text-lg text-white/80 font-medium">
            Practice real interview questions & get instant feedback
          </p>

          <Button asChild className="tactile-maximalism w-full sm:w-fit py-6 px-10 text-lg rounded-2xl">
            <Link href="/interview">Start an Interview</Link>
          </Button>
        </div>

        <div className="absolute right-[-10%] top-[-10%] w-96 h-96 bg-[var(--color-1)] blur-[120px] opacity-30 rounded-full mix-blend-screen pointer-events-none" />
        <div className="absolute left-[20%] bottom-[-20%] w-72 h-72 bg-[var(--color-2)] blur-[100px] opacity-30 rounded-full mix-blend-screen pointer-events-none" />

        <Image
          src="/robot.png"
          alt="robo-dude"
          width={400}
          height={400}
          className="max-sm:hidden relative z-10 hover:scale-105 transition-transform duration-500 drop-shadow-[0_20px_50px_rgba(107,33,168,0.5)]"
        />
      </section>

      <section className="flex flex-col gap-8 mt-12">
        <h2 className="text-3xl font-bold border-l-4 border-[var(--color-3)] pl-4">Your Interviews</h2>

        <div className="bento-grid">
          {hasPastInterviews ? (
            userInterviews?.map((interview) => (
              <InterviewCard
                key={interview.id}
                userId={user?.id}
                interviewId={interview.id}
                role={interview.role}
                type={interview.type}
                techstack={interview.techstack}
                createdAt={interview.createdAt}
              />
            ))
          ) : (
            <div className="bento-item claymorphism flex items-center justify-center col-span-full min-h-[250px]">
              <p className="text-xl text-white/50 font-semibold tracking-wide">You haven&apos;t taken any interviews yet</p>
            </div>
          )}
        </div>
      </section>

      <section className="flex flex-col gap-8 mt-12">
        <h2 className="text-3xl font-bold border-l-4 border-[var(--color-2)] pl-4">Take Interviews</h2>

        <div className="bento-grid">
          {hasUpcomingInterviews ? (
            allInterview?.map((interview) => (
              <InterviewCard
                key={interview.id}
                userId={user?.id}
                interviewId={interview.id}
                role={interview.role}
                type={interview.type}
                techstack={interview.techstack}
                createdAt={interview.createdAt}
              />
            ))
          ) : (
            <div className="bento-item neumorphism flex items-center justify-center col-span-full min-h-[250px]">
              <p className="text-xl text-white/50 font-semibold tracking-wide">There are no interviews available</p>
            </div>
          )}
        </div>
      </section>
    </>
  );
}

export default Home;
