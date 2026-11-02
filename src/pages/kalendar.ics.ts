import type { APIRoute } from 'astro';
import { clubMatches, competitionFor, competitionShortName, snapshot } from '../lib/data';
import { buildCalendar } from '../lib/ical';

export const GET: APIRoute = () =>
  new Response(
    buildCalendar({
      name: `${snapshot.club.name} – utakmice`,
      matches: clubMatches,
      stamp: snapshot.generatedAt,
      competitionName: (id) => {
        const c = competitionFor(id);
        return c ? competitionShortName(c) : id;
      },
    }),
    { headers: { 'Content-Type': 'text/calendar; charset=utf-8' } },
  );
