import React from "react";
import { Link } from "react-router-dom";

export default class Vowels extends React.Component {
  render() {
    return (
      <div>
          <div className="box content">
            <p>
                You're almost ready to start typing words, but there's a detail or two regarding the
                <span className="stroke">F</span> and <span className="stroke">G</span> keys,
                and we need to go over the vowel keys as well.
            </p>
            <ul>
                <li>
                    <span className="stroke">F</span>: In addition to the 'f' sound, this key is also used
                    to indicate the 'v' sound (and sometimes 's', as you'll see in Lesson 2: Steno Order).
                </li>
                <li>
                    <span className="stroke">G</span>: In addition to the hard 'g' sound used in words like
                    'hug' and 'rag', this key may also be used to indicate the 'ing' sound, in words like 'using' and 'holding'.
                </li>
            </ul>
            <h2>Rules for Short Vowel Sounds</h2>
            <p>
              If you're not sure about the difference between long and short vowels, or what diphthongs are, here's a <a href="http://en.wikipedia.org/wiki/Vowel_length#Traditional_long_and_short_vowels_in_English_orthography">useful article on long and short vowels</a> and an <a href="http://en.wikipedia.org/wiki/Diphthong#English">article on diphthongs</a>. The rest of this lesson, and future lessons, all assume you have a clear understanding of those things.
            </p>

            <p>
              <b>Rule 1: If the vowel letter in the written word appears without another vowel letter next to it, then it doesn't matter which short vowel sound it makes. The Plover key labeled with that letter is always used to stroke the word.</b>
            </p>

            <p>
              So '<b>not</b>' is stroked with <span className="stroke">O</span> because it's spelled with "o", and 'tar' is stroked with <span className="stroke">A</span> because it's spelled with "a". Likewise, 'pert' uses <span className="stroke">E</span> and 'purse' uses <span className="stroke">U</span>.
            </p>

            <p>
              <b>Rule 2: If the vowel sound in the written word is spelled with two or more consecutive vowel letters, then it doesn't matter what spelling is used. The Plover key whose short vowel sound matches the sound in the word is always used to stroke the word.</b>
            </p>

            <p>
              So 'heart' is stroked with an <span className="stroke">A</span> because it uses a short 'a' sound;  'roar' is stroked with <span className="stroke">O</span> because it uses a short 'o' sound; 'head' is stroked with <span className="stroke">E</span> because it uses a short 'e' sound; 'tough' is stroked with a <span className="stroke">U</span> because it uses a short 'u' sound. Short vowel sounds like the 'a' in 'bat' and the 'u' in 'put' follow the same rule.
            </p>

            <h2>What About Long Vowels And Diphthongs?</h2>
            <p>
              A long vowel sounds kind of like saying the name of the letter. For example, the word 'bake' uses a long 'a' sound, the word 'poke' uses a long 'o' sound, the word 'teeth' uses a long 'e' sound, and the word 'few' uses a long 'u' sound. The 'oo' sound in words like 'glue' and 'crew' is also considered a long 'u' sound in Plover.
            </p>
            <p>
              Diphthongs are where the sound of one vowel transitions to the sound of another, as in the 'ow' sound in 'down' and the 'oi' sound in 'toil'; or where two vowel sounds are merged together, as in the 'aw' sound in 'dawn'.
            </p>
            <p>
              Plover handles long vowels and diphthongs by stroking two or more vowel keys together. See 3A: Vowels for the full explanation.
            </p>
            <p>
              If you're still a little fuzzy on the vowel sounds, don't worry. The following exercises will help.
            </p>
          </div>
          <Link to="/lesson-1/keyboard" className="button is-primary is-pulled-left">Previous</Link>
          <Link to="/lesson-1/stroking-words-1" className="button is-primary is-pulled-right">Next</Link>
        </div>
    )
  }
}
