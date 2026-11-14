-- Aparna's 16th Birthday: shared RSVP and voting tables
-- Run this entire script in Supabase -> SQL Editor -> New query.
-- These policies make the small event site publicly readable/writable.
-- Do not store private or sensitive information in these tables.

create extension if not exists pgcrypto;

create table if not exists public.rsvps (
  guest text primary key,
  status text not null check (status in ('yes', 'no')),
  updated_at timestamptz not null default now()
);

create table if not exists public.plan_votes (
  voter_id text primary key,
  choice text not null check (choice in ('olive', 'crafts')),
  created_at timestamptz not null default now()
);

create table if not exists public.craft_votes (
  voter_id text not null,
  craft_id text not null check (craft_id in ('cookies', 'snowglobe', 'magnets', 'frames', 'caps')),
  created_at timestamptz not null default now(),
  primary key (voter_id, craft_id)
);

create table if not exists public.craft_suggestions (
  id uuid primary key default gen_random_uuid(),
  creator text not null,
  idea text not null check (char_length(idea) between 1 and 70),
  created_at timestamptz not null default now()
);

create table if not exists public.suggestion_votes (
  voter_id text not null,
  suggestion_id uuid not null references public.craft_suggestions(id) on delete cascade,
  created_at timestamptz not null default now(),
  primary key (voter_id, suggestion_id)
);

alter table public.rsvps enable row level security;
alter table public.plan_votes enable row level security;
alter table public.craft_votes enable row level security;
alter table public.craft_suggestions enable row level security;
alter table public.suggestion_votes enable row level security;

-- Remove policies first so this setup script can safely be run again.
drop policy if exists "Public can read RSVPs" on public.rsvps;
drop policy if exists "Public can add RSVPs" on public.rsvps;
drop policy if exists "Public can update RSVPs" on public.rsvps;
drop policy if exists "Public can read plan votes" on public.plan_votes;
drop policy if exists "Public can add plan votes" on public.plan_votes;
drop policy if exists "Public can update plan votes" on public.plan_votes;
drop policy if exists "Public can read craft votes" on public.craft_votes;
drop policy if exists "Public can add craft votes" on public.craft_votes;
drop policy if exists "Public can remove craft votes" on public.craft_votes;
drop policy if exists "Public can read craft suggestions" on public.craft_suggestions;
drop policy if exists "Public can add craft suggestions" on public.craft_suggestions;
drop policy if exists "Public can read suggestion votes" on public.suggestion_votes;
drop policy if exists "Public can add suggestion votes" on public.suggestion_votes;
drop policy if exists "Public can remove suggestion votes" on public.suggestion_votes;

create policy "Public can read RSVPs" on public.rsvps for select using (true);
create policy "Public can add RSVPs" on public.rsvps for insert with check (true);
create policy "Public can update RSVPs" on public.rsvps for update using (true) with check (true);

create policy "Public can read plan votes" on public.plan_votes for select using (true);
create policy "Public can add plan votes" on public.plan_votes for insert with check (true);
create policy "Public can update plan votes" on public.plan_votes for update using (true) with check (true);

create policy "Public can read craft votes" on public.craft_votes for select using (true);
create policy "Public can add craft votes" on public.craft_votes for insert with check (true);
create policy "Public can remove craft votes" on public.craft_votes for delete using (true);

create policy "Public can read craft suggestions" on public.craft_suggestions for select using (true);
create policy "Public can add craft suggestions" on public.craft_suggestions for insert with check (true);

create policy "Public can read suggestion votes" on public.suggestion_votes for select using (true);
create policy "Public can add suggestion votes" on public.suggestion_votes for insert with check (true);
create policy "Public can remove suggestion votes" on public.suggestion_votes for delete using (true);

grant usage on schema public to anon, authenticated;
grant select, insert, update, delete on public.rsvps to anon, authenticated;
grant select, insert, update, delete on public.plan_votes to anon, authenticated;
grant select, insert, update, delete on public.craft_votes to anon, authenticated;
grant select, insert, update, delete on public.craft_suggestions to anon, authenticated;
grant select, insert, update, delete on public.suggestion_votes to anon, authenticated;
