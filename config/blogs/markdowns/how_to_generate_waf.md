# Generating Synthetic Voice with Python

Creating synthetic voice outputs from text, often referred to as text-to-speech (TTS) synthesis, is a fascinating application of artificial intelligence. This capability can be used in various applications such as virtual assistants, reading aids for the visually impaired, and automated customer service systems. This blog post explores how to generate a fake voice using Python.

Click here to get the [colab](https://colab.research.google.com/drive/1oSBzbJBMqlsWRJ7ALfWknra9P2BrfHmM?usp=sharing) for the code.

## What is Text-to-Speech?

Text-to-Speech (TTS) is a type of assistive technology that reads digital text aloud. It's commonly used to help those who have difficulty reading standard print, such as the visually impaired or those who have dyslexia.

## Tools Required

For this demonstration, we will use the `gTTS` (Google Text-to-Speech) library, which is a Python library and CLI tool to interface with Google Translate's text-to-speech API.

## Setting Up Your Environment

To start, you'll need to have Python installed on your system. Python 3.x is recommended. You can download it from the [official Python website](https://python.org).

Once Python is installed, you can install the `gTTS` library using pip:

```bash
pip install gtts
```

## Generating Voice from Text

Here is a simple script that converts text into spoken voice:

```python
from gtts import gTTS
import os

# The text that you want to convert to audio
mytext = 'Hello, welcome to our tutorial on how to generate fake voice using Python.'

# Language we want to use
language = 'en'

myobj = gTTS(text=mytext, lang=language, slow=False)

# Saving the converted audio in a WAV file
myobj.save("welcome.wav")

# Playing the converted file
os.system("mpg321 welcome.wav")
```

### Code Explanation

- **Importing Libraries:** We import `gTTS` from the `gtts` module for text to speech conversion and `os` for interacting with the operating system.
- **Text Input:** `mytext` variable holds the text string that needs to be converted to speech.
- **Language:** The `language` variable defines the language to interpret the text. The example uses English (en).
- **Speed:** The `slow` parameter in `gTTS` function is set to `False` to have the speech at the normal speed.
- **Saving the Speech:** `myobj.save("welcome.wav")` saves the spoken text into a WAV file named `welcome.wav`.
- **Playing the Audio:** The `os.system` command is used to play the saved audio file using the default media player.

## Conclusion

Using Python's `gTTS` library to generate synthetic voice is straightforward and can be integrated into various applications to enhance accessibility and automation. Whether for educational purposes, entertainment, or service automation, the potential uses are vast and versatile.

Feel free to experiment with different languages supported by Google Translate and various textual inputs to see how effectively `gTTS` can handle them.
