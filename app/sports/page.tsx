import Link from "next/link";
import ScrollReveal from "@/components/ScrollReveal";

const sports = [
  { emoji: "🏀", name: "Basketball", features: "Full scoreboard, shot clock, fouls, quarters, player stats" },
  { emoji: "⚽", name: "Football (Soccer)", features: "Score, match clock, substitutions, cards, possession stats" },
  { emoji: "🏉", name: "Australian Football", features: "Goals, behinds, quarters, interchange, scoring worms" },
  { emoji: "🏉", name: "Rugby League", features: "Tries, conversions, penalties, sin bin, interchange" },
  { emoji: "🏉", name: "Rugby Union", features: "Tries, conversions, scrums, lineouts, penalty counts" },
  { emoji: "🏏", name: "Cricket", features: "Batting, bowling figures, overs, run rate, wagon wheels" },
  { emoji: "🏐", name: "Netball", features: "Score, quarters, centre passes, goal shooting stats" },
  { emoji: "🏑", name: "Hockey", features: "Score, periods, penalty corners, cards, possession" },
  { emoji: "⚾", name: "Baseball", features: "Innings, count, bases, pitching stats, batting order" },
  { emoji: "🏐", name: "Volleyball", features: "Sets, points, serve rotation, timeout tracking" },
  { emoji: "🎾", name: "Tennis", features: "Sets, games, points, serve indicators, match stats" },
  { emoji: "🤾", name: "Handball", features: "Score, halves, suspensions, shot tracking" },
  { emoji: "🤽", name: "Water Polo", features: "Score, quarters, exclusions, shot clock" },
  { emoji: "⚽", name: "Futsal", features: "Score, halves, accumulated fouls, timeouts" },
  { emoji: "🏒", name: "Ice Hockey", features: "Score, periods, penalty box, power play, shots on goal" },
  { emoji: "🥍", name: "Lacrosse", features: "Score, quarters, man-up/down, face-offs" },
  { emoji: "🏈", name: "American Football", features: "Score, quarters, downs, yards, timeouts, play clock" },
  { emoji: "🏓", name: "Table Tennis", features: "Sets, points, serve rotation, match stats" },
  { emoji: "🏸", name: "Badminton", features: "Sets, points, serve, rally tracking" },
  { emoji: "🎮", name: "Esports", features: "Customisable overlays for any game or tournament format" },
  { emoji: "🥎", name: "Softball", features: "Innings, count, bases, batting and pitching stats" },
  { emoji: "🤼", name: "Kabaddi", features: "Score, halves, raids, tackles, super raids" },
];

const included = [
  "Sport-specific scoreboard overlays",
  "Automated clock and period management",
  "Team logo and colour auto-population",
  "Player roster integration",
  "Event-driven graphic triggers",
  "Real-time stats overlays",
  "Customisable lower-thirds",
  "Pre-built Fuse templates",
  "Data feed connectors",
];

export default function SportsPage() {
  return (
    <main className="pt-[92px] overflow-hidden">
      {/* Hero */}
      <section className="relative text-center px-6 py-28 overflow-hidden">
        <div className="dot-grid absolute inset-0 pointer-events-none" />
        <div
          className="orb orb-a absolute pointer-events-none"
          style={{
            width: "700px", height: "700px",
            top: "-250px", left: "50%", transform: "translateX(-50%)",
            background: "radial-gradient(circle, rgba(255,80,78,0.12) 0%, transparent 70%)",
            filter: "blur(80px)",
          }}
        />
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ background: "radial-gradient(ellipse 70% 60% at 50% 50%, transparent 40%, rgba(29,32,42,0.85) 100%)" }}
        />
        <ScrollReveal className="relative z-10">
          <p className="text-xs font-semibold tracking-[0.2em] mb-4" style={{ color: "#ff504e" }}>
            SPORTS
          </p>
          <h1 className="text-5xl md:text-7xl font-extrabold leading-tight mb-6">
            Every sport. Every level.
            <br />
            <span style={{ color: "#ff504e" }}>One platform.</span>
          </h1>
          <p className="text-lg max-w-2xl mx-auto" style={{ color: "#9ca3af" }}>
            LIGR supports 20+ sports with purpose-built overlays, automated scoring logic, and
            sport-specific data bindings — from grassroots to elite.
          </p>
        </ScrollReveal>
      </section>

      {/* Sports grid */}
      <section className="px-6 pb-24 max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {sports.map((sport, i) => (
            <ScrollReveal key={sport.name} delay={(i % 4) * 60}>
            <div
              className="glow-card p-6 rounded-2xl h-full"
              style={{
                backgroundColor: "rgba(255,255,255,0.04)",
                border: "1px solid rgba(255,255,255,0.08)",
              }}
            >
              <div className="text-3xl mb-4">{sport.emoji}</div>
              <h3 className="font-bold mb-2">{sport.name}</h3>
              <p className="text-xs leading-relaxed" style={{ color: "#9ca3af" }}>
                {sport.features}
              </p>
            </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* Every sport includes */}
      <section
        className="px-6 py-24"
        style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}
      >
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl font-extrabold mb-6">Every sport includes</h2>
            <p className="text-lg leading-relaxed mb-8" style={{ color: "#9ca3af" }}>
              Purpose-built production tools that understand the rules, flow, and data of each sport.
            </p>
            <ul className="space-y-3">
              {included.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="flex-shrink-0" style={{ color: "#ff504e" }}>✓</span>
                  <span className="text-sm" style={{ color: "#d1d5db" }}>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div
            className="p-8 rounded-2xl"
            style={{
              backgroundColor: "rgba(255,255,255,0.04)",
              border: "1px solid rgba(255,255,255,0.08)",
            }}
          >
            <h3 className="font-bold mb-2">Don&apos;t see your sport?</h3>
            <p className="text-sm mb-6" style={{ color: "#9ca3af" }}>
              We&apos;re always adding new sports. Enterprise customers can request custom sport
              configurations tailored to their exact requirements.
            </p>
            <Link
              href="/contact"
              className="inline-block px-6 py-3 rounded-xl text-sm font-bold text-white"
              style={{ backgroundColor: "#ff504e" }}
            >
              Request a Sport
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
