# Geofast: Battle of Nations - Game Design Document (GDD)

**Version:** 1.0
**Date:** 2025-10-01
**Author:** Shigeru (Game Designer)
**Status:** In Progress

---

## Table of Contents

1. [Goals and Background Context](#1-goals-and-background-context)
2. [Executive Summary](#2-executive-summary)
3. [Core Gameplay](#3-core-gameplay)
4. [Game Mechanics](#4-game-mechanics)
5. [Progression & Balance](#5-progression--balance)
6. [Level Design Framework](#6-level-design-framework)
7. [Technical Specifications](#7-technical-specifications)
8. [Technical Architecture Requirements](#8-technical-architecture-requirements)
9. [Development Phases & Epic Planning](#9-development-phases--epic-planning) _(Pending)_
10. [Success Metrics & Quality Assurance](#10-success-metrics--quality-assurance) _(Pending)_
11. [Next Steps & BMad Integration](#11-next-steps--bmad-integration) _(Pending)_

---

## 1. Goals and Background Context

### Goals

- Deliver a polished, engaging turn-based strategy game that runs at 60 FPS on mobile devices (iOS/Android)
- Create a competitive multiplayer experience with nation-based warfare and seasonal World War editions
- Build a sustainable free-to-play economy with IAP, ads, and premium subscriptions
- Establish a robust social ecosystem with friends, lobbies, and nation-based communities
- Provide deep weapon-based tactical gameplay with 20+ unique weapons and strategic mechanics
- Support 40+ languages for global accessibility and market reach
- Enable content expansion through unlockable themes, skins, and battle passes

### Background Context

Geofast: Battle of Nations is a mobile-first turn-based strategy game where players represent nations in fast-paced tactical battles. The game addresses the gap in the mobile strategy market for quick, accessible battles (2-5 minutes) that combine geographic theming with deep tactical weapon systems.

The target audience spans casual mobile gamers seeking quick strategic gameplay and competitive players interested in ranked seasonal competitions. The game leverages national pride and geographic identity as engagement hooks, allowing players to represent their country in both casual and competitive World War modes. With a comprehensive SOLID-based architecture using Godot Engine 4.5 and Nakama multiplayer backend, the game supports both offline AI battles and real-time online multiplayer with lobbies, leaderboards, and social features.

### Change Log

| Date | Version | Description | Author |
|------|---------|-------------|--------|
| 2025-10-01 | 1.0 | Initial GDD creation based on existing codebase | Shigeru (Game Designer) |

---

## 2. Executive Summary

### Core Concept

Geofast: Battle of Nations is a fast-paced turn-based strategy game where players represent nations in tactical weapon-based warfare. Players engage in 2-9 country battles using 20+ unique weapons including nukes, shields, alliances, and special abilities, competing for global supremacy in quick 3-5 minute matches or seasonal World War competitions.

### Target Audience

**Primary:** Ages 13-35, mobile strategy enthusiasts, prefer quick tactical gameplay sessions (3-10 minutes), enjoy competitive ranking systems and national/geographic theming

**Secondary:** Casual mobile gamers seeking accessible strategy games, players interested in turn-based tactical combat, competitive esports-lite enthusiasts looking for skill-based mobile competitions

### Platform & Technical Requirements

**Primary Platform:** Mobile (iOS/Android)
**Engine:** Godot 4.5 with GDScript
**Language Strategy:** GDScript for game logic, UI, and battle systems
**Performance Target:** 60 FPS minimum on iPhone 8/Galaxy S8 equivalent devices
**Screen Support:** Portrait orientation, 1080x1920 base resolution with responsive scaling
**Export Templates:** Android AAB (Google Play), iOS (App Store)
**TDD Approach:** GUT testing framework for GDScript

### Unique Selling Points

1. **20+ Tactical Weapons System** - Deep strategic combat with probability-based weapon spawning, shield mechanics, poison effects, alliances, nuke stealing, and special abilities like extra turns and instant kills

2. **Nation-Based Identity & Competition** - Represent 150+ countries with authentic flags, compete in seasonal World War editions with nation-wide leaderboards, chat, and prize distribution

3. **Hybrid Casual-Competitive Design** - Quick 3-5 minute offline battles for casual play, plus ranked competitive World War mode with medals, titles, and seasonal resets for hardcore players

4. **Comprehensive Multiplayer Infrastructure** - Real-time lobbies (public/private), invite codes, customizable battle settings, friends system, and Nakama-powered authoritative server architecture

5. **Extensive Customization & Progression** - 18+ player skins, 18+ battle/menu themes, achievement system, daily goals, battle pass, and diamond economy with 30+ unlockable IAP items

---

## 3. Core Gameplay

### Game Pillars

1. **Tactical Weapon Mastery** - Every weapon has distinct strategic value with probability-based spawning requiring players to adapt tactics dynamically. Players must master 20+ weapons with varying damage, effects, and targeting behaviors to succeed.

2. **Fast Strategic Decisions** - Battles maintain 60 FPS performance with rapid turn execution (0.8-1.6s per weapon animation). Players make meaningful strategic choices in 3-5 minute sessions without sacrificing tactical depth.

3. **Risk-Reward Resource Management** - Nuke economy (consume nukes for powerful attacks), shield timing (protect vs save resources), alliance formation (temporary cooperation with betrayal potential), and poison/revival tactical trades create layered decision-making.

4. **Accessible Depth** - Core mechanics learnable in 30 seconds (tap country → tap weapon → tap target), but mastery requires understanding weapon probabilities, shield counters, alliance timing, and 14 special weapon interactions.

5. **Nation Pride & Competition** - Geographic identity drives engagement through country representation, World War nation battles, seasonal editions with medals/titles, and leaderboard competition that balances individual skill with team contribution.

### Core Gameplay Loop

**Primary Loop (30-45 seconds per turn cycle):**

1. **Observe Battle State** (2-5s) - Assess country health (hearts), shields, alliances, poison status, nuke counts via visual indicators on elliptical battlefield
2. **Select Weapon** (3-8s) - Choose from available weapons (bullet always available, probability-based specials appear) considering tactical situation
3. **Target Enemy** (2-5s) - Select target country from 1-8 opponents based on threat level, alliance status, shield protection, strategic positioning
4. **Execute & Observe** (5-10s) - Weapon animation plays (0.8-1.6s depending on type), damage/effects applied, death/revival/alliance changes trigger visual/audio feedback
5. **Process Turn** (1-3s) - Poison damage applies, turn counter increments, next country's turn begins with weapon probability roll

**Performance Target:** Loop maintains 60 FPS during all phases including weapon animations and particle effects

### Win/Loss Conditions

**Victory Conditions:**

- **Last Country Standing** - Eliminate all opponents (reduce hearts to 0) - Godot Signal: `country_eliminated` from BattleState
- **Alliance Victory** (optional setting) - Be part of the last surviving alliance when only allied countries remain - Godot Signal: `game_ended` with alliance win flag

**Failure States:**

- **Hearts Depleted** - Player's country reaches 0 hearts - Trigger: `country_died` signal from HealthComponent
- **Alliance Defeat** (if alliance win enabled) - All alliance members eliminated while enemies survive - Trigger: Alliance component state check on `country_eliminated`

---

## 4. Game Mechanics

### Primary Mechanics

#### Weapon System - Probability-Based Arsenal

**Description:** Players have access to a dynamic arsenal of 20 weapons that spawn based on configurable probability values. Each weapon has unique damage, effects, targeting behavior, and strategic purpose. Weapons range from basic attacks (bullet, grenade, nuke) to tactical utilities (shields, healing, alliances) to powerful special weapons (reaper, bomber, thief).

**Player Input:** Tap weapon icon from available options (1-3 weapons shown) → Tap target country - InputMap Action: `press` (touch/mouse)

**System Response:**
- Weapon projectile animates from origin to target at configured speed
- Damage/effects apply based on shield status and weapon properties
- Visual feedback (heart changes, shield break, poison indicator, alliance formation)
- Audio feedback (weapon-specific sounds, death sounds, anthem on victory)
- State updates propagate (BattleState signals, component updates)

**Godot Implementation Notes:**

- **Nodes Needed:** WeaponV2 (Resource), Area2D for target selection, AnimatedSprite2D for projectile, GPUParticles2D for impact effects
- **Language Choice:** GDScript - Battle logic is well-suited for GDScript's dynamic typing and signal system
- **Physics Requirements:** Projectile motion via Tween or direct position interpolation (no physics body needed - visual only)
- **Animation:** Projectile sprites with rotation toward target, impact particles, country visual state updates (hearts, shields, poison overlay)
- **Performance:** Weapon execution must maintain 60+ FPS - object pooling for particles, pre-loaded weapon textures
- **Object Pooling:** Particle systems pooled for impact effects, projectile sprites reused

**Dependencies:** BattleState (country health/shields/poison), WeaponRegistry (weapon factories), EffectSystem (IEffect implementations)

**Script Architecture:**

- `WeaponV2.gd` - Core weapon class with execute logic, effect application
- `WeaponRegistry.gd` (Autoload singleton) - Factory registration and weapon creation
- `IEffect.gd` - Effect interface (DIP compliance)
- `DamageEffect.gd`, `HealEffect.gd`, `PoisonEffect.gd`, etc. - Concrete effect implementations
- `BattleManager.gd` (Autoload) - Weapon probability configuration

**TDD Requirements:**
- GUT tests for weapon effect application
- Test shield interaction for each weapon type
- Verify probability-based weapon spawning
- Validate effect stacking and interaction

---

#### Shield System - Defense Layer

**Description:** Countries can acquire shields that block incoming damage from most weapons. Shields come in two types: normal shields (block 1 attack then break) and permanent shields (persist until explicitly broken by dynamite). Shields are bypassed by specific weapons (torpedo, thief, healing weapons) and can be given via the tank weapon.

**Player Input:** Shields are passive (no direct input) - acquired via tank weapon or game events - InputMap Action: N/A

**System Response:**
- Incoming damage blocked if shield active (visual shield flash, damage negated)
- Shield breaks on block (normal shields only)
- Shield-ignoring weapons bypass and deal damage directly
- Visual shield indicator (circular overlay on country flag)

**Godot Implementation Notes:**

- **Nodes Needed:** ShieldComponent (Resource), ColorRect or Sprite2D for shield visual overlay, AnimationPlayer for shield flash/break
- **Language Choice:** GDScript - Component-based state management fits GDScript patterns
- **Physics Requirements:** None (visual indicator only)
- **Animation:** Shield pulse/glow animation, shield break particle effect, flash on damage block
- **Performance:** Minimal overhead - shield state is boolean check, 60+ FPS maintained
- **Object Pooling:** Shield visual particles pooled for break effects

**Dependencies:** BattleState (shield state storage), Country (ShieldComponent), WeaponV2 (shield-aware damage)

**Script Architecture:**

- `ShieldComponent.gd` - Shield state management, online/offline mode handling
- `ShieldEffect.gd` - Effect that grants shields (used by tank weapon)
- `ShieldBreakEffect.gd` - Effect that removes shields (used by dynamite weapon)

**TDD Requirements:**
- Test normal shield breaks after 1 hit
- Verify permanent shields persist through multiple attacks
- Validate shield-ignoring weapons bypass shields
- Test shield synchronization in online mode

---

#### Alliance System - Temporary Cooperation

**Description:** Countries can form alliances using healing weapons (heart, medkit, golden_heart). Allied countries share a common alliance_id and can win together if alliance victory is enabled. Alliances can be broken by the hammer weapon, bomb AoE damage to allies, or automatically when only 2 countries remain alive. Alliances break on death.

**Player Input:** Alliance formation via healing weapon → Select ally to heal/ally with - InputMap Action: `press` (tap target)

**System Response:**
- Alliance visual indicator appears (alliance icon between allied countries)
- Alliance win condition activates (if enabled in battle settings)
- Alliance breaking triggers visual removal of alliance indicators
- Win condition checks alliance membership on country elimination

**Godot Implementation Notes:**

- **Nodes Needed:** AllianceComponent (Resource), Line2D for alliance connection visual, Sprite2D for alliance icon
- **Language Choice:** GDScript - State-based alliance logic suits GDScript signals
- **Physics Requirements:** None (visual and state management only)
- **Animation:** Alliance formation glow, alliance icon fade-in, alliance break particle effect
- **Performance:** Alliance checks are O(n) country scans, 60+ FPS maintained with max 9 countries
- **Object Pooling:** Alliance visual effects pooled

**Dependencies:** BattleState (alliance state), Country (AllianceComponent), WeaponV2 (alliance formation/break effects)

**Script Architecture:**

- `AllianceComponent.gd` - Alliance state (alliance_id), alliance formation/break logic
- `AllianceSetEffect.gd` - Effect that creates alliances (used by healing weapons)
- `AllianceBreakEffect.gd` - Effect that breaks alliances (used by hammer, bomb)

**TDD Requirements:**
- Test alliance formation between 2+ countries
- Verify alliance breaks on death
- Validate alliance win condition logic
- Test automatic alliance break when 2 countries remain

---

#### Poison System - Damage Over Time

**Description:** The poison weapon applies a poison status that deals 1 damage per turn for a configured duration (default 3 turns). Poison is cured on death or revival. Poison damage is applied automatically during turn processing via the PoisonComponent.

**Player Input:** Poison application via poison weapon → Select target to poison - InputMap Action: `press` (tap target)

**System Response:**
- Poison status applied (visual poison indicator overlay on country)
- Each turn, poison deals 1 damage automatically before turn starts
- Poison counter decrements each turn
- Poison expires after duration or on death/revival (visual indicator removed)

**Godot Implementation Notes:**

- **Nodes Needed:** PoisonComponent (Resource), Sprite2D for poison overlay, AnimationPlayer for poison pulse effect
- **Language Choice:** GDScript - Turn-based damage application suits GDScript timer patterns
- **Physics Requirements:** None (status effect and visual only)
- **Animation:** Poison cloud overlay, damage pulse animation each turn, poison expiration fade
- **Performance:** Poison processing is per-country per-turn, 60+ FPS maintained
- **Object Pooling:** Poison visual particles pooled

**Dependencies:** BattleState (poison state, turn processing), Country (PoisonComponent), WeaponV2 (poison effect)

**Script Architecture:**

- `PoisonComponent.gd` - Poison status tracking, turn-based damage application
- `PoisonEffect.gd` - Effect that applies poison (used by poison weapon)

**TDD Requirements:**
- Test poison applies for configured duration
- Verify poison deals 1 damage per turn
- Validate poison cures on death/revival
- Test poison expiration after duration

---

#### Nuke Economy - Limited Resource Warfare

**Description:** Countries start with 1 nuke (configurable). Nukes are consumed when using the nuke weapon (4 damage powerful attack). Players can steal nukes using hacker (steals all) or magnet (steals 1). If steal_nukes_enabled, killing a country steals all their nukes. Nukes are tracked via NukeComponent.

**Player Input:** Nuke weapon selection consumes 1 nuke → Target selection - InputMap Action: `press` (tap weapon, tap target)

**System Response:**
- Nuke count decrements on use
- Visual nuke counter updates (nuke icons on country)
- Nuke stealing effects transfer nukes between countries
- Death transfers nukes to killer (if enabled)

**Godot Implementation Notes:**

- **Nodes Needed:** NukeComponent (Resource), TextureRect for nuke count icons, Label for nuke number display
- **Language Choice:** GDScript - Resource tracking suits GDScript's dynamic properties
- **Physics Requirements:** None (resource counter only)
- **Animation:** Nuke icon animations on gain/loss, nuke transfer particle effect
- **Performance:** Nuke tracking is simple integer operations, 60+ FPS maintained
- **Object Pooling:** Nuke transfer particles pooled

**Dependencies:** BattleState (nuke state, steal mechanics), Country (NukeComponent), WeaponV2 (nuke consumption, steal effects)

**Script Architecture:**

- `NukeComponent.gd` - Nuke count tracking, nuke transfer logic
- `StealNukesEffect.gd` - Effect that steals nukes (used by hacker, magnet)
- `RemoveNukesEffect.gd` - Effect that consumes nukes (used by nuke weapon)

**TDD Requirements:**
- Test nuke consumption on weapon use
- Verify nuke stealing effects transfer correctly
- Validate death nuke transfer (if enabled)
- Test nuke count limits and edge cases (0 nukes, 100+ nukes)

---

### Controls

| Action | Desktop | Mobile | Gamepad | InputMap Action |
|--------|---------|--------|---------|-----------------|
| Select Weapon | Left Click | Tap Weapon Icon | N/A | press |
| Select Target | Left Click | Tap Country Flag | N/A | press |
| Pause Battle | Escape/P | Pause Button | Start | ui_cancel |
| Navigate UI | Mouse | Touch/Swipe | D-Pad | N/A (gesture-based) |

---

### Weapon Reference - Complete Arsenal (20 Weapons)

**Critical for Game Balance:** This section provides comprehensive details for all weapons including damage values, probabilities, effects, and strategic roles.

#### Basic Weapons (6 weapons)

| Weapon | Damage | AI Prob | Player Prob | Speed | Wait Time | Cost | Shield Interaction | Effects | Strategic Role |
|--------|--------|---------|-------------|-------|-----------|------|-------------------|---------|----------------|
| **Bullet** | 1 heart | 100% (fallback) | N/A | 1000 | 0.8s | None | Blocked by shields | Direct damage | Guaranteed option when no specials spawn |
| **Nuke** | 4 hearts | 25% | 50% | 350 | 1.0s | 1 nuke | Blocked by shields | Consumes 1 nuke, massive damage | High-damage resource attack |
| **Grenade** | 2 hearts | 20% | 20% | 550 | 0.9s | None | Blocked by shields | Direct damage | Medium-damage reliable attack |
| **Heart** | +1 heart (heal) | 10% | 12% | 580 | 0.9s | None | Ignores shields | Heal target +1, form alliance (id: 0) | Healing + alliance formation |
| **Poison** | 1 heart initial + DoT | 4% | 4% | 350 | 1.6s | None | Blocked by shields | Poison status (3 turns, 1 dmg/turn) | Sustained damage over time |
| **Revival** | +2 hearts (revive) | 8% | 30% | 380 | 0.9s | 1 heart from caster | Ignores shields (targets dead) | Revive dead country with 2 hearts | Bring back eliminated players |

**Basic Weapons Design Notes:**
- **Bullet**: Always available (100% probability) ensures players never have empty turn
- **Nuke**: High probability for players (50% vs 25% AI) makes it accessible power play
- **Heart**: Forms alliance automatically (alliance_id: 0), strategic cooperation tool
- **Poison**: Long wait time (1.6s) balances sustained damage potential
- **Revival**: Higher player probability (30% vs 8% AI) encourages aggressive play (can revive allies)

---

#### Special Weapons - Utility & Support (4 weapons)

| Weapon | Damage/Effect | Probability | Speed | Wait Time | Cost | Shield Interaction | Effects | Strategic Role |
|--------|---------------|-------------|-------|-----------|------|-------------------|---------|----------------|
| **Medkit** | +3 hearts (heal) | 15% | 450 | 1.1s | None | Ignores shields | Heal target +3, form alliance (id: 0) | Powerful healing + alliance |
| **Golden Heart** | +2 hearts (self + target) | 10% | 450 | 1.1s | None | Ignores shields | Heal caster +2, heal target +2, form alliance | Mutual benefit healing |
| **Tank** | 1 heart | 10% | Variable | 1.1s | None | Blocked by shields | Deal 1 damage, grant normal shield to caster | Defensive attack (shields user) |
| **Thief** | 0 hearts (steal 2) | 9% | Variable | 1.0s | None | **Ignores shields** | Steal 2 hearts from target, transfer to caster | Health transfer (no damage) |

**Utility Weapons Design Notes:**
- **Medkit**: Highest healing (3 hearts) + alliance, strongest support option
- **Golden Heart**: Only weapon that heals caster, encourages self-preservation while helping allies
- **Tank**: Offensive defense (attack + shield yourself), tactical survivability
- **Thief**: Ignores shields, pure health transfer (no actual damage dealt), swing mechanic (target -2, caster +2 = 4 heart swing)

---

#### Special Weapons - Offensive Power (6 weapons)

| Weapon | Damage | Probability | Speed | Wait Time | Cost | Shield Interaction | Effects | Strategic Role |
|--------|--------|-------------|-------|-----------|------|-------------------|---------|----------------|
| **Reaper** | 100 hearts (instant kill) | 4% | 200 | 1.5s | None | Blocked by shields | Massive damage (one-hit kill if shield down) | Ultimate nuke (rare spawn) |
| **Bomber** | 4 hearts | 8% | Variable | 1.3s | None | Blocked by shields | Deal 4 damage + **grant extra turn** | High damage + momentum |
| **Missile** | 5 hearts | 6% | Variable | 1.4s | None | Blocked by shields | Direct damage (highest single-target) | Maximum single-hit damage |
| **Torpedo** | 3 hearts | 10% | Variable | 1.2s | None | **Ignores shields** | Direct damage, bypasses all shields | Shield counter (penetrating attack) |
| **Drone** | 2 hearts | 10% | Variable | 1.0s | None | Blocked by shields | Deal 2 damage + **grant extra turn** | Moderate damage + momentum |
| **Bomb** | 2 hearts (primary) + 1 heart (AoE) | 10% | 400 | 1.1s | None | Blocked by shields | Deal 2 to target, 1 AoE to target's alliance members | Alliance punisher |

**Offensive Weapons Design Notes:**
- **Reaper**: Rarest (4%), slowest animation (200 speed, 1.5s wait), but instant kill potential (100 damage)
- **Missile**: Highest guaranteed damage (5 hearts) if shield is down, rare spawn (6%)
- **Bomber vs Drone**: Bomber is stronger (4 dmg vs 2 dmg) but rarer (8% vs 10%), both grant extra turn
- **Torpedo**: Only 3 damage but **ignores shields**, making it superior against shielded targets (3 guaranteed > 5 blocked)
- **Bomb**: AoE punishes alliance stacking (target takes 2, allies take 1 each)

---

#### Special Weapons - Tactical/Control (4 weapons)

| Weapon | Damage/Effect | Probability | Speed | Wait Time | Cost | Shield Interaction | Effects | Strategic Role |
|--------|---------------|-------------|-------|-----------|------|-------------------|---------|----------------|
| **Hacker** | 1 heart | 8% | 400 | 1.1s | None | Blocked by shields (for damage), **ignores for nuke steal** | Deal 1 damage, steal **all nukes** (up to 100) if shield broken | Resource denial (nuke theft) |
| **Magnet** | 1 heart | 9% | 400 | 1.1s | None | Blocked by shields (for damage), **ignores for nuke steal** | Deal 1 damage, steal **1 nuke** if shield broken | Targeted nuke theft |
| **Hammer** | 1 heart | 18% (highest) | 400 | 1.2s | None | Blocked by shields | Deal 1 damage, **break target's alliance** | Alliance destroyer |
| **Dynamite** | 2 hearts | 12% | 380 | 1.1s | None | Blocked by shields | Deal 2 damage, **remove target's shield** | Shield breaker |

**Tactical Weapons Design Notes:**
- **Hacker**: Steals **all nukes** (nuclear denial), most powerful if target has many nukes (can steal 100), damage is secondary
- **Magnet**: Steals **1 nuke** (gradual resource drain), more common than hacker (9% vs 8%)
- **Hammer**: Highest probability (18%), alliance breaking is powerful in alliance-heavy games
- **Dynamite**: Shield removal enables follow-up attacks (removes shield + deals 2 damage)

---

### Weapon Balance Framework

#### Probability Tiers (Spawn Frequency)

**Always Available (100%):**
- Bullet - Fallback weapon, ensures no empty turns

**Common (15-20%):**
- Medkit (15%), Grenade (20% AI / 20% player), Hammer (18%)
- Strategy: Reliable options that appear frequently

**Uncommon (8-12%):**
- Hacker (8%), Magnet (9%), Thief (9%), Golden Heart (10%), Heart (10% AI / 12% player), Tank (10%), Bomb (10%), Torpedo (10%), Drone (10%), Dynamite (12%)
- Strategy: Tactical variety, balanced spawn rate

**Rare (4-8%):**
- Poison (4%), Reaper (4%), Missile (6%), Bomber (8%), Revival (8% AI / 30% player)
- Strategy: High-impact weapons with limited availability

**Resource-Gated (25-50%):**
- Nuke (25% AI / 50% player) - Requires nuke inventory
- Strategy: Powerful but limited by resource consumption

#### Damage Tiers

**No Damage (Utility):**
- Heart, Medkit, Golden Heart, Revival, Thief (transfers health, doesn't damage)

**Low Damage (1 heart):**
- Bullet, Hacker, Magnet, Hammer, Tank

**Medium Damage (2-3 hearts):**
- Grenade (2), Poison (1 initial + 3 DoT = 4 total), Dynamite (2), Drone (2), Bomb (2 primary), Torpedo (3)

**High Damage (4-5 hearts):**
- Nuke (4), Bomber (4), Missile (5)

**Instant Kill (100 hearts):**
- Reaper (rare, blocked by shields)

#### Shield Interaction Categories

**Shield-Aware (Blocked by shields):**
- Bullet, Nuke, Grenade, Poison, Reaper, Bomber, Missile, Drone, Bomb, Hacker (damage only), Magnet (damage only), Hammer, Dynamite, Tank

**Shield-Ignoring (Bypasses shields):**
- Heart, Medkit, Golden Heart, Revival (targets dead countries), Thief, Torpedo
- **Partial Ignore:** Hacker/Magnet (damage blocked, but nuke steal occurs if shield broken)

#### Special Effect Categories

**Healing:**
- Heart (+1), Medkit (+3), Golden Heart (+2 to both), Revival (+2 to dead), Thief (+2 to caster via steal)

**Alliance Formation:**
- Heart, Medkit, Golden Heart (all form alliance_id: 0)

**Alliance Breaking:**
- Hammer (explicit), Bomb (AoE to allies)

**Shield Manipulation:**
- Tank (grants shield to caster), Dynamite (removes target's shield)

**Resource Manipulation:**
- Nuke (consumes 1 nuke), Hacker (steals all nukes), Magnet (steals 1 nuke)

**Status Effects:**
- Poison (3 turns, 1 dmg/turn)

**Extra Turns:**
- Bomber, Drone (both grant extra turn after use)

#### Strategic Weapon Counters

**Counter Shields:**
- Torpedo (ignores shields, 3 damage)
- Dynamite (removes shields, 2 damage)
- Thief (ignores shields, steals 2 hearts)

**Counter Alliances:**
- Hammer (breaks alliance, 1 damage)
- Bomb (AoE to allies, 2 + 1 each)

**Counter High Nuke Counts:**
- Hacker (steals all nukes)
- Magnet (steals 1 nuke)

**Counter Low Health:**
- Heart (+1 heal), Medkit (+3 heal), Golden Heart (+2 heal), Revival (+2 revive)

**Counter Resource Denial:**
- Bullet (always available, no cost)
- Grenade (common, 20% spawn)

#### Balance Considerations

**AI vs Player Probability Differences:**
- Nuke: 25% AI vs 50% Player (players get more access to power weapon)
- Heart: 10% AI vs 12% Player (slightly favor player healing)
- Revival: 8% AI vs 30% Player (massively favor player revival, encourages aggressive play)

**Wait Time Balancing:**
- Shortest: Bullet (0.8s) - Weak weapon, quick execution
- Longest: Poison (1.6s) - DoT requires longer animation for clarity
- Power weapons: Reaper (1.5s), Missile (1.4s), Bomber (1.3s) - High damage gets longer wait times

**Speed Balancing:**
- Fastest: Bullet (1000) - Quick weak attack
- Slowest: Reaper (200) - Dramatic slow-moving instant kill projectile
- Standard: 350-450 range for most weapons

**Design Philosophy:**
- **No guaranteed win buttons:** Even Reaper (100 damage) is blocked by shields
- **Rock-paper-scissors:** Shields block damage, but Torpedo/Thief ignore shields; Alliances provide strength, but Hammer/Bomb counter alliances
- **Resource management:** Nukes are powerful (4 damage) but limited, Hacker/Magnet create nuke economy game
- **Risk-reward:** Revival costs 1 heart from caster, Extra turn weapons (Bomber/Drone) enable combos but are rare
- **Accessibility:** Bullet (100%) ensures no player is ever stuck without options

---

## 5. Progression & Balance

### Player Progression

**Progression Type:** Hybrid (Linear content unlocking + competitive ranking ladder)

**Key Milestones:**

1. **First Battle Complete** - Tutorial completion, unlocks online features - Godot: Achievement system update via `update_achievement_progress` RPC
2. **Nation Selection** - Choose nation for World War, join nation community - Godot: PlayerManager state update, nation leaderboard access
3. **Ranked Placement** - Complete first World War battle, earn initial medals/title - Godot: LeaderboardsManager score submission, title resource assignment
4. **Edition Veteran** - Complete full World War edition cycle, receive season rewards - Godot: Prize system distribution via `get_pending_prizes` RPC
5. **Achievement Master** - Unlock all geographic achievements (win with every continent/country) - Godot: Achievement completion triggers diamond rewards
6. **Customization Unlocked** - Purchase first skin/theme, personalize experience - Godot: SkinsManager/ThemeManager state persistence

**Save Data Structure:**

```gdscript
# GDScript save data (stored in Nakama storage objects)
class_name PlayerProgress
extends Resource

@export var user_id: String
@export var gamer_tag: String
@export var selected_nation: String
@export var current_skin: String
@export var current_battle_theme: String
@export var current_menu_theme: String

# Progression tracking
@export var total_battles_played: int = 0
@export var total_battles_won: int = 0
@export var total_ww_battles: int = 0
@export var total_medals: int = 0
@export var current_ww_title: String = ""

# Unlocks
@export var unlocked_skins: Array[String] = []
@export var unlocked_themes: Array[String] = []
@export var unlocked_passes: Array[String] = []

# Economy
@export var diamond_balance: int = 0
@export var pending_prizes: Array[Dictionary] = []

# Achievements
@export var completed_achievements: Array[String] = []
@export var achievement_progress: Dictionary = {}

# Daily goals
@export var daily_goals_progress: Dictionary = {}
@export var daily_goals_reset_time: int = 0

# Social
@export var friends_list: Array[String] = []
@export var friend_requests: Array[String] = []
```

### Difficulty Curve

**Tutorial Phase:** First 1-3 battles - Low weapon variety, predictable AI
- Godot Config: AI uses only bullets/grenades (75% bullet, 25% grenade probability) - Language: GDScript
- AI targets randomly, no strategic priority - Must maintain 60+ FPS

**Early Game:** Battles 4-20 - Introduce special weapons gradually, basic AI tactics
- Godot Config: AI uses basic weapons (bullet, nuke, grenade, heart, poison, revival) with standard probabilities - Must maintain 60+ FPS
- AI prioritizes low-health targets, uses shields defensively

**Mid Game:** Battles 21-100 - Full weapon arsenal, advanced AI, online battles unlocked
- Godot Config: All 20 weapons available with production probabilities from BattleManager - Object pooling required for particles
- AI uses tactical alliance formation, shield timing, nuke conservation

**Late Game:** Battles 100+ - Competitive World War, ranked ladder, seasonal resets
- Godot Config: Competitive probabilities (potentially adjusted per edition) - C# optimization for AI decision trees if performance degrades
- AI employs advanced tactics: alliance betrayal timing, poison pressure, resource denial

### Economy & Resources

| Resource | Earn Rate | Spend Rate | Purpose | Cap | Godot Resource |
|----------|-----------|------------|---------|-----|----------------|
| Diamonds | 5-50 per achievement, 10-30 per daily goal, 3 per rewarded ad (max 3/day), IAP packs (100-10000) | 50-500 per skin, 100-300 per theme, 200 per sandbox pass, 500 per ad-free pass | Premium currency for unlocks, battle boosts, extra hearts/nukes | 999,999 | DiamondsManager (server-side balance) |
| Medals | 1-10 per World War battle based on performance (kills, survival, victory) | N/A (ranking currency) | World War leaderboard ranking, edition prizes | 999,999 | LeaderboardsManager (server-side score) |
| Hearts | Start with 5 per battle, earn via heart/medkit weapons, spend via revival weapon | 1 per revival cast, lost to damage | Battle survival resource | 10 per country | HealthComponent (BattleState) |
| Nukes | Start with 1 per battle (configurable), steal via hacker/magnet/death | 1 per nuke weapon use | Powerful attack resource | 100 per country | NukeComponent (BattleState) |
| Shields | Acquired via tank weapon or special events | Consumed on damage block | Damage mitigation | 1 per country (boolean) | ShieldComponent (BattleState) |

---

## 6. Level Design Framework

### Level Types

#### Quick Battle (Offline AI)

**Purpose:** Single-player tactical practice, experimentation, casual play without competitive pressure

**Target Duration:** 3-5 minutes per battle (8-12 turn cycles with 20-30s per turn)

**Key Elements:** 2-9 AI-controlled countries, configurable battle settings (nukes/grenades/poison/hearts/alliances/revivals), battleground selection, shuffle/add/remove countries

**Difficulty Rating:** Variable based on country count (2 countries = easy, 9 countries = chaotic/hard)

**Godot Scene Structure:**

- **Environment:** Elliptical battlefield layout (BattleManager constants: ELLIPSE_WIDTH 0.66, ELLIPSE_HEIGHT 0.63)
- **Gameplay Objects:** Country nodes (flag Sprite2D, heart TextureRect array, nuke counter, shield overlay, poison overlay, alliance Line2D), weapon selection panel, target selection overlay
- **Lighting:** 2D lighting per battleground theme (desert sun, forest ambient, ocean blue tint, etc.)
- **Audio:** BattleSoundsManager (weapon sounds, death sounds, victory anthem), MusicManager (battle music loop)

**Level Flow Template:**

- **Introduction:** Camera pan across battlefield showing all countries (1-2s) - Area: Full viewport (1080x1920)
- **Challenge:** Turn-based weapon selection → target selection → execution loop until victory/defeat - Mechanics: All active weapon/shield/alliance/poison components
- **Resolution:** Victory screen (last country standing or alliance win) with results (kills, survival time, medals earned if online) - Trigger: `game_ended` signal from BattleState

**Reusable Scenes:**

- `offline_battle.tscn` - Main battle scene with UI, battlefield, country slots
- `country_node.tscn` - Individual country representation (flag, hearts, nukes, shields, poison, alliances)
- `weapon_panel.tscn` - Weapon selection UI component
- `battle_background_{theme}.tscn` - Themed backgrounds (desert, forest, jungle, ocean, snow, colosseum, night)

---

#### Sandbox Battle

**Purpose:** Experimental mode for custom configurations, testing strategies, learning advanced mechanics without AI constraints

**Target Duration:** Variable (player-controlled pace, typically 5-10 minutes)

**Key Elements:** All battle settings unlocked, custom country configurations, unlimited retries, battleground selection, save/load sandbox states

**Difficulty Rating:** Player-defined (can create easy practice scenarios or extreme challenge setups)

**Godot Scene Structure:**

- **Environment:** Same elliptical battlefield as Quick Battle
- **Gameplay Objects:** Same country nodes with additional debug overlays (component state visibility), setting toggles in UI
- **Lighting:** Matches battleground theme selection
- **Audio:** Same as Quick Battle with optional mute for testing

**Level Flow Template:**

- **Introduction:** Sandbox settings screen for full customization (country selection, battle settings, initial hearts/nukes) - Area: Full viewport
- **Challenge:** Player-controlled battle with pause/resume/restart/reset at any time - Mechanics: All components active, full observability
- **Resolution:** Battle ends naturally or player exits to reconfigure - Trigger: Manual exit or standard win conditions

**Reusable Scenes:**

- `sandbox.tscn` - Sandbox configuration screen
- `sandbox_battle.tscn` - Battle scene extending `offline_battle.tscn` with debug features

---

#### Online Public Lobby

**Purpose:** Quick matchmaking for competitive multiplayer, skill-based play with random opponents

**Target Duration:** 5-8 minutes (includes lobby wait 1-3 min + battle 4-5 min)

**Key Elements:** 1-9 human players + optional AI fill, host-controlled battle settings, real-time turn execution, country selection coordination

**Difficulty Rating:** High (human opponents, unpredictable tactics, competitive environment)

**Godot Scene Structure:**

- **Environment:** Same elliptical battlefield, synchronized via Nakama OnlineBattleManager
- **Gameplay Objects:** Country nodes with player usernames, real-time state synchronization, turn timers, connection status indicators
- **Lighting:** Battleground theme (synchronized across all clients)
- **Audio:** Same as offline with network latency compensation for sound timing

**Level Flow Template:**

- **Introduction:** Lobby waiting room (player list, country selection, ready status) - Area: Lobby scene (1080x1920)
- **Challenge:** Turn-based battle with authoritative server validation, move broadcast to all clients, synchronized animations - Mechanics: GameState synchronization via OnlineBattleManager
- **Resolution:** Victory screen with medal rewards, leaderboard updates, post-game stats - Trigger: `game_ended` signal from GameState with server validation

**Reusable Scenes:**

- `lobby.tscn` - Lobby waiting room UI
- `online_battle.tscn` - Multiplayer battle scene with network sync
- `player_status_panel.tscn` - Real-time player connection/ready status

---

#### Online Private Lobby

**Purpose:** Custom games with friends, clan battles, tournament play, controlled competitive environment

**Target Duration:** 5-10 minutes (longer lobby customization + battle)

**Key Elements:** Invite code system, host settings control (all battle toggles), friend invitations, private chat, custom rules

**Difficulty Rating:** Variable (depends on player skill levels and custom settings)

**Godot Scene Structure:**

- **Environment:** Same as public lobby with additional host controls UI
- **Gameplay Objects:** Same as public lobby with invite code display, kick player functionality, bot management
- **Lighting:** Same battleground themes
- **Audio:** Lobby chat with optional language filtering

**Level Flow Template:**

- **Introduction:** Private lobby creation with invite code generation, friend invitations, battle settings configuration - Area: Enhanced lobby scene
- **Challenge:** Same synchronized multiplayer battle as public
- **Resolution:** Same victory/medal rewards with optional tournament mode tracking

**Reusable Scenes:**

- `private_lobby.tscn` - Extended lobby with host controls
- Same `online_battle.tscn` as public lobbies
- `invite_code_panel.tscn` - Invite code display/share UI

---

#### World War Battle

**Purpose:** Competitive ranked nation battles, seasonal edition progression, medal accumulation for leaderboards/prizes

**Target Duration:** 6-10 minutes (longer battles due to competitive stakes, strategic play)

**Key Elements:** Nation-based matchmaking, medal rewards (1-10 per battle based on performance), edition leaderboard updates, title progression, nation chat integration

**Difficulty Rating:** Very High (competitive ranked environment, skilled players, high stakes)

**Godot Scene Structure:**

- **Environment:** Same battlefield with nation flag prominence, medal counter HUD, title display
- **Gameplay Objects:** Country nodes with nation affiliation badges, medal gain notifications, real-time leaderboard position updates
- **Lighting:** Premium battleground themes (unlockable via World War boost subscription)
- **Audio:** National anthems on victory, medal earn sound effects

**Level Flow Template:**

- **Introduction:** Nation selection confirmation, World War queue, matchmaking wait (showing current edition info, top nations, player title) - Area: World War hub screen
- **Challenge:** High-stakes multiplayer battle with performance tracking (kills, damage dealt, survival time, alliance plays) for medal calculation - Mechanics: Same GameState sync with additional medal scoring logic
- **Resolution:** Victory screen with medal rewards (1-10), leaderboard position update, title progression check, prize eligibility notification - Trigger: `game_ended` with medal calculation via backend RPC

**Reusable Scenes:**

- `world_war.tscn` - World War hub with nation info, leaderboards, chat
- `ww_battle.tscn` - Battle scene extending `online_battle.tscn` with medal tracking
- `medal_reward_panel.tscn` - Post-battle medal summary and leaderboard update

---

### Level Progression

**World Structure:** Hub-based (Main Menu → Mode Selection → Battle → Results)

**Total Levels:** Infinite (procedurally generated battle scenarios based on country selection and settings)

**Unlock Pattern:** Progressive mode unlocking:
1. Quick Battle (always available)
2. Sandbox (unlocks via Sandbox Pass purchase)
3. Online Public Lobbies (unlocks after first battle complete achievement)
4. Online Private Lobbies (unlocks after first battle complete achievement)
5. World War (unlocks after nation selection)

**Scene Management:** SceneManager handles transitions with preloading for country selection buttons, back navigation tracking

**Godot Scene Organization:**

- Scene Naming: `{mode}_{type}.tscn` (e.g., `offline_battle.tscn`, `online_battle.tscn`, `sandbox.tscn`)
- Resource Preloading: `battle_themes.tres` (theme configurations), `weapon_configs.tres` (weapon probabilities), `country_data.tres` (nation metadata)
- Loading Screens: Transition animations during scene changes (fade in/out with battleground preview)

---

## 7. Technical Specifications

### Godot Project Configuration

**Godot Version:** 4.5 (currently in use)
**Renderer:** GL Compatibility (mobile-optimized)
**Primary Language:** GDScript
**Physics:** 2D Only
**Export Templates:** Android (AAB via Google Play), iOS (App Store)
**.NET Version:** N/A (GDScript-only project)

**Language Strategy:**
- GDScript: All game logic, UI, battle systems, managers, multiplayer (100% of codebase) with static typing mandatory for performance
- C#: Not currently used (potential future optimization for complex AI decision trees if performance degrades)

**Project Settings:**

- Rendering Method: `gl_compatibility` (mobile and desktop compatibility)
- MSAA: Disabled (performance optimization for mobile)
- Physics Settings: Gravity -20 (default 2D), Physics Ticks Per Second 60 (matches target FPS)
- Object Pooling: Required for all spawned entities (weapon projectiles, particles, visual effects)
- Max FPS: 60 (enforced via `run/max_fps=60`)
- Low Processor Mode: Enabled (`run/low_processor_mode=true`)

**Viewport Configuration:**
- Base Resolution: 1080x1920 (portrait mobile)
- Stretch Mode: `canvas_items` (maintains aspect ratio)
- Stretch Aspect: `expand` (fills screen on all devices)
- Orientation: Portrait locked (`window/handheld/orientation=1`)

### Performance Requirements

**Frame Rate:** 60 FPS target (minimum 45 FPS on low-end devices during particle-heavy moments)
**Memory Usage:** <200MB heap on mobile, <150MB textures (compressed with ASTC/ETC2)
**Load Times:** <3s initial app launch, <1s between scenes (SceneManager preloading)
**Battery Usage:** Optimized for 2+ hours continuous gameplay on average mobile device (low processor mode, 60 FPS cap)

**Godot Profiler Targets:**

- Frame Time: <16.67ms (60 FPS mandatory)
- CPU Time: <14ms per frame (leaves 2.67ms buffer for spikes)
- GPU Time: <16ms per frame (gl_compatibility renderer is CPU-heavy, GPU is lightweight)
- Physics Frame: <2ms (minimal physics usage, only Area2D collision detection)
- Draw Calls: <100 per frame (batched sprites, texture atlases for flags/weapons/UI)
- Object Pools: Active for weapon projectiles (pool size: 20), particles (pool size: 50), visual effects (pool size: 30)

**Performance Optimization Strategies:**
- Texture atlases for all country flags (150+ flags in single atlas)
- Weapon icon atlas (20 weapons in single texture)
- UI element batching (TextureRect/ColorRect batched automatically)
- Particle pooling with `queue_free()` replacement by pool return
- Signal-based updates (avoid `_process()` for static elements)
- Static typing in all GDScript (10-20% performance gain)

### Platform Specific Requirements

**Desktop:** (Secondary platform, testing only)

- Resolution: 1080x1920 minimum (portrait simulation), 4K support via stretch mode
- Input: Mouse, Keyboard (Escape for pause, P for pause, mouse click for press)
- Build Target: Windows x64 (development/testing), macOS (future consideration)

**Mobile:** (Primary platform)

- Resolution: 1080x1920 (base) scales to 1440x2560, 1242x2688, 828x1792
- Input: Touch only (tap for press, swipe for navigation via GestureManager)
- OS: iOS 12.0+, Android 7.0+ (API Level 24+)
- Device Requirements:
  - Minimum: iPhone 8 / Galaxy S8 equivalent (2GB RAM, 60 FPS capable)
  - Recommended: iPhone 11 / Galaxy S10+ (4GB+ RAM, consistent 60 FPS)
- Platform Plugins:
  - AdMob (AdManager): Interstitial ads, rewarded video ads
  - Android IAP (BillingManager): Google Play in-app purchases
  - iOS IAP (BillingManager): App Store in-app purchases
  - Share Plugin (ShareManager): Native sharing on Android/iOS
  - Google OAuth2 (NakamaManager): Google Sign-In authentication

**Web:** (Not currently supported)

- WebGL Version: N/A
- Browser Support: N/A
- Compression: N/A

### Asset Requirements

**2D Art Assets:**

- Sprites: Country flags 50x50, 75x75, 100x100 pixels at 1:1 PPU (pixel-perfect rendering)
- Texture Format: RGBA32 for UI/flags (quality priority), RGBA16 for backgrounds (performance), ETC2/ASTC compression on mobile
- Atlas Strategy: Country flags atlas (150+ flags), weapon icons atlas (20 weapons), UI elements atlas (buttons, panels)
- Animation: Frame-based sprite animations for weapons at 30 FPS (bomb explosion, reaper animation, drone flight), particle animations at 60 FPS

**Audio Assets:**

- Music: OGG Vorbis at 44.1kHz stereo (background music, national anthems)
- SFX: WAV at 22.05kHz mono (weapon sounds, UI clicks, death sounds)
- Compression: OGG for music (smaller file size), WAV for SFX (low latency)
- 3D Audio: Not used (2D game, stereo panning only)

**UI Assets:**

- Canvas Resolution: 1080x1920 (portrait base)
- UI Scale Mode: `canvas_items` stretch with `expand` aspect (responsive to all screen sizes)
- Font: Nunito-Bold.ttf (custom font, exported in project settings)
- Icon Sizes:
  - Weapons: 64x64 (weapon panel)
  - Hearts: 40x40 (health display)
  - Nukes: 50x50 (nuke counter)
  - Alliance: 50x50 (alliance indicator)
  - Shields: 170px radius circle overlay (dynamic draw)

**Localization Assets:**

- Translation Files: 40+ .po files (gettext format) in `Assets/translations/`
- Languages: am, ar, az, be, bg, bn, bs, cs, da, de, el, en, es-ES, es-LA, et, fa, fi, fr, ga, he, hi, hr, hu, id, is, it, ja, kk, ko, ky, lt, lv, mg, mk, ms, nl, no, pl, ps, pt-BR, pt-PT, ro, ru, sn, so, sq, sr, sv, sw, th, tk, tr, uk, ur, uz, vi, zh
- Font Support: Unicode-compatible font (Nunito supports Latin, Cyrillic, Greek, Arabic, Hebrew, Thai, etc.)

---

## 8. Technical Architecture Requirements

### Code Architecture Pattern

**Architecture Pattern:** Signal-Driven Component-Based with Singleton Managers

**Core Systems Required:**

- **Scene Management:** SceneManager autoload singleton with scene path constants, preloading for country buttons, back navigation stack tracking
- **State Management:** BattleState Resource with Country component aggregation (HealthComponent, ShieldComponent, PoisonComponent, AllianceComponent, NukeComponent), signal-driven updates propagating via `country_state_changed`
- **Event System:** Godot signals for decoupled communication (weapon execution → battle state → UI updates), custom signal bus not needed (autoload singletons provide signal aggregation)
- **Object Pooling:** Custom pool manager for weapon projectiles, particle effects, visual feedback elements with `get_from_pool()` / `return_to_pool()` pattern
- **Save/Load System:** Nakama storage objects (server-side) + local ConfigFile for user preferences (audio settings, selected skin/theme)

**Folder Structure:**

```
Geofast Battle of Nations/
├── addons/
│   ├── com.heroiclabs.nakama/          # Nakama multiplayer SDK
│   ├── AdmobPlugin/                     # Advertisement integration
│   ├── AndroidIAPP/                     # Android in-app purchases
│   └── SharePlugin/                     # Social sharing
├── Assets/
│   ├── fonts/                           # Nunito-Bold.ttf, localized fonts
│   ├── icons/                           # Weapon icons, UI icons, battle icons
│   ├── logo/                            # App icon, splash screen
│   ├── themes/                          # Battle themes, menu themes, UI theme resources
│   ├── translations/                    # 40+ .po translation files
│   └── flags/                           # Country flag sprites (50x50, 75x75, 100x100)
├── Entities/
│   ├── Root/                            # root.tscn (main entry scene)
│   ├── StateManagement/                 # BattleState, Country, Components (Health, Shield, Poison, Alliance, Nuke)
│   ├── Weapons/                         # WeaponV2, Effects (IEffect, DamageEffect, HealEffect, etc.), WeaponRegistry
│   ├── UI/
│   │   ├── Components/                  # Reusable UI (buttons, panels, backgrounds)
│   │   ├── Screens/                     # Full-screen views (profile, shop, settings)
│   │   └── Scenes/                      # Game flows (MainMenu, QuickBattle, Sandbox, Online, WorldWar, Lobby, OfflineBattle, OnlineBattle)
│   └── Effects/                         # Visual effects (particles, animations, shaders)
├── Managers/                            # Autoload singletons
│   ├── BattleManager.gd                 # Weapon probabilities, battle constants
│   ├── BattleSettingsManager.gd         # Battle configuration (nukes/grenades/poison/etc.)
│   ├── SceneManager.gd                  # Scene transitions, navigation stack
│   ├── SoundManager.gd                  # UI sound effects
│   ├── MusicManager.gd                  # Background music
│   ├── BattleSoundsManager.gd           # Battle-specific audio
│   ├── LanguageManager.gd               # i18n, translation loading
│   ├── CountryData.gd                   # Country names, flag paths, continent data
│   ├── ThemeManager.gd                  # Battle/menu theme management
│   ├── SkinsManager.gd                  # Player skin selection
│   ├── FlagManager.gd                   # Flag sprite loading
│   ├── StyleManager.gd                  # UI styling
│   ├── GestureManager.gd                # Touch/swipe gesture detection
│   ├── BattlegroundsManager.gd          # Battleground environment selection
│   ├── PassManager.gd                   # Sandbox pass, ad-free pass management
│   ├── DiamondsManager.gd               # Premium currency, achievements, daily goals, prizes
│   ├── BillingManager.gd                # IAP (consumables, one-time, subscriptions)
│   ├── AdManager.gd                     # Interstitial ads, rewarded videos
│   ├── ShareManager.gd                  # Social sharing
│   ├── HostManager.gd                   # Multiplayer host session
│   ├── PlayerManager.gd                 # Player profile, gamer tag, nation
│   ├── MultiplayerManagement/           # GameState, CountryState (legacy multiplayer state)
│   └── NakamaManagement/                # Nakama integration
│       ├── NakamaManager.gd             # Core Nakama client wrapper
│       ├── OnlineBattleManager.gd       # Real-time battle sync
│       ├── LobbyManager.gd              # Lobby creation/joining
│       ├── LobbyUpdatesManager.gd       # Real-time lobby state
│       ├── ChatManager.gd               # In-game chat
│       ├── LeaderboardsManager.gd       # World War rankings
│       ├── FriendsManager.gd            # Friends list
│       └── FriendsNotificationHandler.gd # Friend request notifications
└── test_suite/                          # GUT testing framework
    └── tests/                           # Unit tests for core systems
```

**Naming Conventions:**

- Scripts: PascalCase for classes (`WeaponV2.gd`, `BattleState.gd`), snake_case for autoloads (`battle_manager.gd`)
- Scenes: snake_case (`offline_battle.tscn`, `main_menu.tscn`, `country_node.tscn`)
- Resources: snake_case (`weapon_configs.tres`, `battle_themes.tres`)
- Folders: PascalCase for systems (`StateManagement`, `NakamaManagement`), lowercase for assets (`fonts`, `icons`)

### Godot Systems Integration

**Required Godot Systems:**

- **Input System:** InputMap with `press` action for touch/mouse (tap weapon, tap target), `ui_cancel` for pause/back navigation, GestureManager for swipe detection
- **Animation System:** AnimationPlayer for UI transitions (screen fades, panel slides), Tween for weapon projectile motion, GPUParticles2D for visual effects (explosions, poison clouds, shield breaks)
- **Physics Integration:** Area2D for target selection hitboxes (country flags clickable), no RigidBody2D/physics simulation (turn-based, no real-time physics)
- **Rendering Features:** 2D batching for sprites (flags, weapons, UI), canvas layers for UI depth (background layer 0, gameplay layer 1, UI layer 2), texture filtering disabled for pixel-perfect rendering
- **Asset Streaming:** Scene preloading via ResourceLoader for country selection buttons, dynamic texture loading for unlocked skins/themes

**Third-Party Integrations:**

- **Nakama SDK**: Multiplayer backend (authentication, matchmaking, lobbies, leaderboards, storage, RPC functions)
- **AdMob Plugin**: Advertisement delivery (interstitial, rewarded video)
- **Android IAP Plugin**: Google Play billing integration
- **iOS IAP Plugin**: App Store billing integration
- **Share Plugin**: Native sharing on Android/iOS
- **Google OAuth2**: Google Sign-In authentication for Nakama

**Performance Systems:**

- **Profiling Integration:** Godot Profiler enabled in debug builds, frame time monitoring via `Performance` singleton
- **Memory Management:** Object pooling for dynamic entities, signal disconnection on `_exit_tree()`, `queue_free()` deferred deletion
- **Build Pipeline:** Godot export templates with Android AAB (Google Play), iOS IPA (App Store), automated build scripts (future consideration)

### Data Management

**Save Data Architecture:**

- **Format:** Nakama Storage Objects (JSON server-side) for player progress, ConfigFile (INI format) for local preferences
- **Structure:** PlayerProgress resource class (see Progression section), ConfigFile sections for audio/graphics/language
- **Encryption:** Server-side via Nakama (HTTPS/TLS), no local encryption (preferences only, no sensitive data)
- **Cloud Sync:** Automatic via Nakama (player progress syncs across devices with user login)

**Configuration Data:**

- **Resources:** BattleSettings (.tres Resource), WeaponConfigs (.tres Resource), ThemeData (.tres Resource)
- **Settings Management:** BattleSettingsManager autoload stores battle toggles (nukes/grenades/poison/etc.), LanguageManager stores locale, ThemeManager stores active theme IDs
- **Localization:** .po files loaded via `TranslationServer`, locale auto-detection with manual override in settings

**Runtime Data:**

- **Caching Strategy:** Scene preloading for frequently accessed scenes (country selection), texture caching for flags/weapons (loaded once), ResourceLoader cache for Resources
- **Memory Pools:** Weapon projectile pool (20 instances), particle effect pool (50 instances), UI panel pool (10 instances for reused dialogs)
- **Asset References:** Direct Resource references in autoload managers (BattleManager.heart_texture, FlagManager flag atlas), no dynamic `load()` in hot paths

---

## 9. Development Phases & Epic Planning

_(Section pending - to be completed next)_

---

## 10. Success Metrics & Quality Assurance

### Technical Performance Metrics

- **Frame Rate:** Consistent 60 FPS with <5% drops below 45 FPS on target hardware (iPhone 8/Galaxy S8)
- **Load Times:** Initial launch <3s from app icon to main menu, level transitions <1s between scenes (SceneManager preloading optimization)
- **Memory Usage:** Heap memory <200MB on mobile devices, texture memory <150MB (ETC2/ASTC compression)
- **Crash Rate:** <0.5% across iOS/Android platforms (<1 crash per 200 sessions), <0.1% on desktop testing builds
- **Build Size:** Final build <100MB for mobile (Android AAB/iOS IPA optimized), <150MB for desktop builds
- **Battery Life:** Mobile gameplay sessions >2 hours on average device (iPhone 11/Galaxy S10+) with 60 FPS cap and low processor mode enabled
- **Network Latency:** Online battle turn execution <500ms round-trip (client → Nakama server → all clients), lobby updates <200ms
- **Asset Loading:** Country flag atlas loads in <100ms, weapon textures <50ms, theme backgrounds <200ms (preloading required)

### Gameplay & User Engagement Metrics

- **Tutorial Completion:** 85% of players complete first battle (basic weapon/target selection mechanics introduced)
- **Level Progression:** 60% of players reach 10 battles within first session, 40% reach 20 battles within first week
- **Session Duration:** Average session length 8-12 minutes for Quick Battle (2-3 battles), 15-20 minutes for World War (1-2 battles)
- **Player Retention:** Day 1: 50%, Day 7: 25%, Day 30: 15% (competitive with mobile strategy games)
- **Gameplay Completion:** 30% of players complete 100+ battles (mid-game progression milestone), 10% reach World War competitive tier
- **Control Responsiveness:** Input lag <50ms on all platforms (tap weapon → visual feedback), weapon animation execution matches configured wait times (0.8-1.6s)
- **Multiplayer Engagement:** 40% of players try online lobbies after first battle completion, 20% participate in World War within first month
- **Social Engagement:** 15% add at least 1 friend, 5% join nation chat in World War
- **Monetization Conversion:** 2-5% IAP conversion rate (industry standard F2P), average revenue per paying user (ARPPU) $10-20
- **Ad Engagement:** 30% of players watch rewarded ads (3 per day cap), <10% churn rate from interstitial ad fatigue

### Platform-Specific Quality Metrics

| Platform | Frame Rate | Load Time | Memory | Build Size | Battery | Network Latency |
|----------|------------|-----------|--------|------------|---------|-----------------|
| iOS (iPhone 8+) | 60 FPS | <3s | <180MB | <90MB | 2.5+ hours | <500ms |
| iOS (iPhone 11+) | 60 FPS | <2s | <200MB | <90MB | 3+ hours | <400ms |
| Android (Galaxy S8) | 60 FPS (45 min) | <5s | <200MB | <100MB | 2+ hours | <600ms |
| Android (Galaxy S10+) | 60 FPS | <3s | <200MB | <100MB | 2.5+ hours | <500ms |
| Desktop (Windows) | 60 FPS | <2s | <250MB | <150MB | N/A | <300ms |

**Platform Priority:**
1. **iOS**: Primary revenue platform (higher ARPPU), target iPhone 8+ (iOS 12+)
2. **Android**: Largest user base, target Galaxy S8 equivalent (Android 7.0+, API 24+)
3. **Desktop**: Testing/development only (not commercial release)

### Quality Assurance Targets

**Functional Testing:**
- All 20 weapons execute correctly with proper damage/effects (shield interaction, alliance formation, poison application)
- Battle win/loss conditions trigger correctly (last country standing, alliance victory)
- Multiplayer synchronization maintains state consistency across all clients (no desync issues)
- IAP purchases process correctly on both platforms (receipt validation via Nakama)
- Achievement tracking updates accurately (server-side progress, diamond rewards claimed)
- Daily goals reset at midnight UTC (server-side timestamp validation)

**Performance Testing:**
- Maintain 60 FPS in worst-case scenario: 9 countries, all with shields/poison/alliances, 5+ particle effects active simultaneously
- No memory leaks over 30-minute session (heap memory stable within 200MB)
- Network disconnection recovery graceful (lobby reconnect, battle forfeit if timeout)
- Object pooling prevents allocation spikes (particle pool size 50, weapon projectile pool 20)

**Compatibility Testing:**
- 40+ languages display correctly (font supports all character sets, RTL languages handled)
- All screen resolutions render correctly (1080x1920 to 1440x2560, aspect ratio preserved)
- Touch gestures work on all devices (swipe back, tap weapon/target, pinch/zoom disabled)
- Platform plugins integrate correctly (AdMob, IAP, Share, OAuth2)

**Localization Testing:**
- Translation strings load for all 40+ languages (no missing keys)
- UI layouts accommodate text expansion (German/Russian longer than English)
- National anthems play for correct countries (150+ flags mapped to audio files)

**Security Testing:**
- Server-side validation for all critical operations (diamond purchases, medal awards, achievement progress)
- Anti-cheat measures prevent client-side manipulation (Nakama authoritative server)
- No sensitive data stored locally (passwords, payment info server-side only)

**Regression Testing:**
- Automated GUT tests run on every build (weapon effects, component state changes, battle win conditions)
- Manual smoke tests for critical paths (launch app → play battle → purchase IAP → join lobby)

---

## 11. Next Steps & BMad Integration

### Godot Architecture Requirements

Summary of key architectural decisions that need to be implemented in Godot project setup with TDD and performance focus:

- Godot 4.5 project with GL Compatibility renderer (mobile-optimized, widest device support)
- Signal-Driven Component-Based architecture with 20+ autoload singleton managers (BattleManager, SceneManager, DiamondsManager, etc.)
- Language strategy: GDScript for all systems (100% of codebase) with static typing enforced for 10-20% performance gain
- Performance targets: 60 FPS mandatory on iPhone 8/Galaxy S8, object pooling for particles/projectiles (pool sizes: 20 projectiles, 50 particles, 10 UI panels)
- Platform exports: Android AAB (Google Play), iOS IPA (App Store) with mobile plugins (AdMob, IAP, Share, OAuth2)
- Component-based state management: BattleState with Country aggregating HealthComponent, ShieldComponent, PoisonComponent, AllianceComponent, NukeComponent
- WeaponV2 system with SOLID principles: IEffect interface (DIP), EffectComponent composition, WeaponRegistry factory pattern
- Nakama multiplayer backend: Server-side validation for diamonds/medals/achievements, authoritative game state, real-time lobby/battle sync
- Testing strategy: GUT framework for unit tests (weapon effects, component state, battle conditions), manual QA for platform-specific features

### Story Creation Guidance for SM Agent

Provide guidance for the Story Manager (SM) agent on how to break down this GDD into implementable user stories:

**Epic Prioritization:**
1. **Core Foundation Epic** (Foundation + Basic Gameplay) - Establish Godot project, managers, basic battle with 6 weapons, offline AI
2. **Advanced Combat Epic** (14 Special Weapons) - Implement special weapon system, WeaponV2 architecture, all effects
3. **Multiplayer Infrastructure Epic** (Nakama Integration) - Online lobbies, World War, real-time sync, leaderboards
4. **Monetization & Progression Epic** (Economy Systems) - Diamonds, IAP, achievements, daily goals, ads
5. **Polish & Launch Epic** (Customization, Localization, Performance) - Skins, themes, 40+ languages, 60 FPS optimization

**Story Sizing Guidelines:**

- **Foundation stories:** Individual Godot systems with GUT tests (BattleState, Country components, WeaponRegistry) - 1-2 days each for AI agent execution
- **Feature stories:** Complete gameplay mechanics with 60+ FPS validation (weapon implementation with effects, alliance system, poison DoT) - 2-4 days each
- **Polish stories:** Optimization and content addition (theme backgrounds, skin assets, translation integration) - 1-2 days each

**Godot-Specific Story Considerations:**

- Each story should result in testable Godot scenes with GUT test coverage (e.g., "Implement Shield System" → `ShieldComponent.gd` + `test_shield_component.gd`)
- Include specific node hierarchies and signal flows in acceptance criteria (e.g., "ShieldComponent emits `shield_broken` signal → Country propagates to BattleState → UI updates shield overlay")
- Enforce 60+ FPS performance validation in each story's definition of done (e.g., "Weapon execution maintains 60 FPS with 9 countries + 5 active particles")
- Account for export template configuration and deployment (e.g., "Configure Android AAB export with AdMob plugin integration")
- Specify language choice (GDScript vs C#) for each component - default to GDScript unless performance-critical AI emerges (e.g., "Implement AI decision tree in GDScript, migrate to C# only if profiler shows >5ms CPU time")

### Recommended BMad Agent Sequence

1. **Godot Architect (`/BmadG:agents:godot-architect`)**: Create detailed technical architecture document with node hierarchies, signal flow diagrams, component relationships, and scene inheritance patterns
2. **Godot Developer (`/BmadG:agents:godot-developer`)**: Implement core systems with TDD (GUT tests first), focusing on BattleState, WeaponV2, component architecture while maintaining 60+ FPS
3. **UI/UX Designer (`/ui-ux-designer`)**: Design UI flows for all 5 game modes (Quick Battle, Sandbox, Public/Private Lobbies, World War), create mockups for weapon selection, battle HUD, lobby screens
4. **Backend Developer (Nakama Specialist)**: Implement Nakama RPCs for economy (diamonds, achievements, daily goals), multiplayer (lobbies, battle sync, leaderboards), IAP validation
5. **QA Tester (`/test-automator`)**: Validate performance targets (60 FPS profiling), platform compatibility (iOS/Android exports), multiplayer synchronization, all 20 weapon behaviors
6. **Localization Specialist**: Integrate 40+ .po translation files, validate RTL languages, ensure UI layouts accommodate text expansion, map national anthems to 150+ countries
7. **Performance Engineer (`/performance-engineer`)**: Optimize to 60 FPS on target devices (iPhone 8/Galaxy S8), implement object pooling, profile memory usage, reduce draw calls to <100

### Development Workflow Integration

**Phase 1: Foundation (Weeks 1-4)**
- Set up Godot 4.5 project with GUT testing framework
- Implement core managers (BattleManager, SceneManager, BattleSettingsManager)
- Create BattleState + Country component architecture
- Build offline battle scene with 2 countries, basic UI
- Implement 6 basic weapons (bullet, nuke, grenade, heart, poison, revival)
- **Deliverable:** Playable offline 2-country battle with basic weapons, 60 FPS validated

**Phase 2: Advanced Combat (Weeks 5-8)**
- Implement WeaponV2 system with IEffect interface
- Create all 14 special weapon effects (hacker, medkit, golden_heart, reaper, bomb, hammer, dynamite, magnet, torpedo, bomber, missile, drone, thief, tank)
- Build weapon probability system in BattleManager
- Implement shield mechanics (normal + permanent shields)
- Add alliance system with visual indicators
- **Deliverable:** Full 20-weapon arsenal functional, 9-country battles, all mechanics working

**Phase 3: Multiplayer (Weeks 9-14)**
- Integrate Nakama SDK, implement NakamaManager
- Build lobby system (LobbyManager, OnlineBattleManager)
- Create real-time battle synchronization (GameState, authoritative server)
- Implement World War (nation selection, leaderboards, medals)
- Add friends system and chat
- **Deliverable:** Full multiplayer functional (public/private lobbies, World War), server-side validation

**Phase 4: Monetization (Weeks 15-18)**
- Implement DiamondsManager (server-side balance via Nakama)
- Integrate IAP (BillingManager with Android/iOS plugins)
- Add AdManager (AdMob interstitial + rewarded video)
- Build achievement system with diamond rewards
- Create daily goals with progress tracking
- Implement PassManager (Sandbox pass, Ad-free pass, World War boost)
- **Deliverable:** Full economy functional, IAP working on both platforms, ads integrated

**Phase 5: Polish & Launch (Weeks 19-24)**
- Add 18+ skins (SkinsManager) and 18+ themes (ThemeManager)
- Integrate 40+ language translations (LanguageManager)
- Optimize to 60 FPS on target devices (profiling, object pooling)
- Implement all 7 battleground themes with animations
- Platform-specific testing (iOS/Android compatibility)
- Beta testing, bug fixes, performance tuning
- **Deliverable:** Production-ready build, app store submissions

### Critical Path Dependencies

**Must Complete Before Multiplayer:**
- BattleState + Country components (online sync requires this architecture)
- All 20 weapons functional (multiplayer uses same weapon system)
- Shield/alliance/poison mechanics (must sync across clients)

**Must Complete Before Monetization:**
- Nakama integration (server-side diamond balance)
- Achievement tracking (diamond rewards)
- Battle completion tracking (daily goals)

**Must Complete Before Launch:**
- 60 FPS optimization on target devices (app store approval)
- Platform plugin integration (IAP, ads functional)
- Localization (40+ languages for global launch)

### Risk Mitigation

**Performance Risk (60 FPS on iPhone 8/Galaxy S8):**
- Mitigation: Early profiling in Phase 1, object pooling from start, static typing enforced
- Contingency: Reduce max countries to 7, disable some particle effects on low-end devices

**Multiplayer Sync Risk (Desync issues):**
- Mitigation: Authoritative server (Nakama validates all moves), thorough testing in Phase 3
- Contingency: Implement resync mechanism (client requests full state from server)

**Monetization Risk (Low IAP conversion <2%):**
- Mitigation: Competitive pricing ($0.99-$9.99), rewarded ads as F2P alternative
- Contingency: Adjust diamond economy, add more progression rewards

**Localization Risk (40+ languages, RTL support):**
- Mitigation: Use professional .po translation services, test RTL layouts early
- Contingency: Launch with 10 core languages, add others post-launch

### Success Criteria

**Technical Success:**
- 60 FPS maintained on iPhone 8/Galaxy S8 in worst-case scenario (9 countries, all effects)
- <0.5% crash rate across iOS/Android
- <3s load times, <1s scene transitions
- All 20 weapons working correctly with proper effects

**Product Success:**
- 50% Day 1 retention, 25% Day 7 retention
- 40% of players try online multiplayer
- 2-5% IAP conversion rate
- 85% tutorial completion rate

**Business Success:**
- Successful app store launch (iOS + Android)
- ARPPU $10-20 within first 30 days
- Top 100 in Strategy category in 3+ countries
- Positive user reviews (4.0+ average rating)

---

**End of Document - Game Design Document Complete ✅**

**Document Version:** 1.0
**Last Updated:** 2025-10-01
**Total Sections:** 11/11 Complete
