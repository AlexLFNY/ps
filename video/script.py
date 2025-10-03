from moviepy import VideoFileClip, AudioFileClip, CompositeAudioClip
from gtts import gTTS
import os

def create_voiceover_video(video_path, output_path):
    # Charge la vidéo
    video = VideoFileClip(video_path)
    
    # Script de voix off
    voiceover_script = [
        (0, "Le jeu de Nim"),
        (3, "Les règles sont simples."),
        (5, "On commence avec dix-neuf bâtonnets."),
        (8, "Chacun son tour, on peut enlever un, deux ou trois bâtonnets."),
        (12, "Attention ! Celui qui prend le dernier bâtonnet a perdu !"),
        (16, "Voyons un exemple de partie."),
        (18, "Joueur un enlève trois bâtonnets. Il en reste seize."),
        (22, "Joueur deux enlève deux bâtonnets. Il en reste quatorze."),
        (26, "Joueur un enlève trois bâtonnets. Il en reste onze."),
        (30, "Joueur deux enlève un bâtonnet. Il en reste dix."),
        (34, "Joueur un enlève deux bâtonnets. Il en reste huit."),
        (38, "Joueur deux enlève trois bâtonnets. Il en reste cinq."),
        (42, "Joueur un enlève deux bâtonnets. Il en reste trois."),
        (46, "Il reste trois bâtonnets."),
        (49, "Qui va gagner ?"),
        (53, "À vous de jouer !"),
    ]
    
    # Génère tous les clips audio
    audio_clips = []
    temp_files = []
    
    for i, (timestamp, text) in enumerate(voiceover_script):
        # Génère l'audio
        filename = f"temp_voice_{i}.mp3"
        tts = gTTS(text=text, lang='fr', slow=False)
        tts.save(filename)
        temp_files.append(filename)
        
        # Crée le clip audio au bon moment
        audio_clip = AudioFileClip(filename)
        audio_clip = audio_clip.with_start(timestamp)
        audio_clips.append(audio_clip)
    
    # Combine tous les clips audio
    final_audio = CompositeAudioClip(audio_clips)
    
    # Ajoute l'audio à la vidéo
    final_video = video.with_audio(final_audio)
    
    # Exporte
    final_video.write_videofile(output_path, codec='libx264', audio_codec='aac')
    
    # Nettoie les fichiers temporaires
    for file in temp_files:
        if os.path.exists(file):
            os.remove(file)
    
    print(f"✅ Vidéo créée : {output_path}")

# Utilisation
video_input = "./JeuDeNim.mp4"  # Ajuste le chemin
video_output = "JeuDeNim_avec_voix.mp4"

create_voiceover_video(video_input, video_output)
