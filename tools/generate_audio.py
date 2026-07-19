from __future__ import annotations

import asyncio
import sys
from pathlib import Path

import edge_tts


ENGLISH_VOICE = "en-US-AnaNeural"
CHINESE_VOICE = "zh-CN-XiaoxiaoNeural"
AUDIO_DIR = Path(__file__).resolve().parent.parent / "audio"

CLIPS = {
    "level-1-find-cat.mp3": "Find the cat.",
    "level-2-red-key.mp3": "Give me the red key.",
    "level-3-dog-boat.mp3": "Put the dog on the boat.",
    "level-4-sound-s.mp3": "Sun starts with S. Find S.",
    "level-5-build-cat.mp3": "Build cat. C. A. T. Cat.",
    "level-6-see-fish.mp3": "I see a fish.",
    "level-7-see-cat.mp3": "I see a cat.",
    "boss-1-red-key.mp3": "Find the red key.",
    "boss-2-dog.mp3": "Find the dog.",
    "boss-3-build-cat.mp3": "Build cat. C. A. T.",
    "boss-4-open-door.mp3": "Open the door.",
    "word-dog.mp3": "Dog.",
    "word-bird.mp3": "Bird.",
    "word-fish.mp3": "Fish.",
    "letter-c.mp3": "C.",
    "letter-a.mp3": "A.",
    "letter-t.mp3": "T.",
    "nori-preview.mp3": "Hello! I am Nori. Let's go to Animal Harbor.",
    "school-good-morning.mp3": "Good morning, Ms. Lee.",
    "school-may-i-come-in.mp3": "May I come in?",
    "school-need-help.mp3": "I need help.",
    "school-my-book.mp3": "This is my book.",
    "school-bathroom.mp3": "Can I go to the bathroom, please?",
    "school-friends.mp3": "Can we be friends?",
    "school-boss-find-book.mp3": "Find the book.",
    "school-thank-you.mp3": "Thank you, Ms. Lee.",
    "life-milk.mp3": "I would like some milk, please.",
    "life-shoes.mp3": "Put on your shoes.",
    "life-red-light.mp3": "Stop at the red light.",
    "life-pencil.mp3": "I can't find my pencil.",
    "life-water.mp3": "Can I have some water, please?",
    "life-nervous.mp3": "I feel nervous.",
    "life-play-with-you.mp3": "Can I play with you?",
    "life-happy.mp3": "I feel happy.",
    "life-see-you.mp3": "See you tomorrow!",
    "idiom-focus.mp3": "一心一意",
    "idiom-order.mp3": "井井有条",
    "idiom-help.mp3": "助人为乐",
    "idiom-dragon.mp3": "画龙点睛",
}


async def generate(force: bool = False) -> None:
    AUDIO_DIR.mkdir(parents=True, exist_ok=True)
    for filename, text in CLIPS.items():
        output = AUDIO_DIR / filename
        if output.exists() and not force:
            print(f"kept {filename}")
            continue
        voice = CHINESE_VOICE if filename.startswith("idiom-") else ENGLISH_VOICE
        communicate = edge_tts.Communicate(text, voice, rate="-8%", pitch="+0Hz")
        await communicate.save(str(output))
        print(f"generated {filename}")


if __name__ == "__main__":
    asyncio.run(generate(force="--force" in sys.argv))
