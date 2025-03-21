export default function Home() {
  return (
    <div className="grid grid-rows-[auto_auto_1fr_auto] min-h-screen p-4 md:p-8 lg:p-12 font-serif bg-[#fdfbf7]">
      {/* Header */}
      <header className="text-center mb-6">
        <h1 className="text-4xl md:text-5xl font-bold text-[#5a2e0d] tracking-tight mb-4">
          The Third Epistle of Peter
        </h1>
        <div className="w-24 h-1 bg-[#8b4513] mx-auto rounded-full"></div>
      </header>

      {/* Navigation */}
      <nav className="py-3 px-4 mb-6 border-b border-[#d3c8a3] bg-[#fff8dc]">
        <div className="max-w-4xl mx-auto flex flex-wrap justify-center md:justify-between items-center">
          <div className="text-sm font-medium text-[#5a2e0d] mb-2 md:mb-0">Bible Study Resources</div>
          <ul className="flex flex-wrap gap-4 md:gap-6 justify-center text-sm">
            <li><a href="https://www.biblestudytools.com/" className="text-[#8b4513] hover:underline" target="_blank" rel="noopener noreferrer">Bible Study Tools</a></li>
            <li><a href="https://www.biblegateway.com/" className="text-[#8b4513] hover:underline" target="_blank" rel="noopener noreferrer">Bible Gateway</a></li>
            <li><a href="https://www.blueletterbible.org/" className="text-[#8b4513] hover:underline" target="_blank" rel="noopener noreferrer">Blue Letter Bible</a></li>
            <li><a href="https://biblehub.com/" className="text-[#8b4513] hover:underline" target="_blank" rel="noopener noreferrer">Bible Hub</a></li>
          </ul>
        </div>
      </nav>
      
      <main className="flex flex-col gap-8 max-w-4xl mx-auto w-full py-10">
        {/* Introductory Text */}
        <section className="text-base md:text-lg leading-7 text-gray-800 bg-[#fff8dc] p-6 border border-[#d3c8a3] rounded-lg shadow-sm mx-4 md:mx-0">
          <p>
            Most people don't know that a Third Epistle of Peter exists, yet it was once included among the texts of the King James Version's Apocrypha. This lesser-known epistle, though not part of the canonical Bible, speaks to the scattered elect with warnings and encouragement for the faithful. Below is the full text of this remarkable book, presented for reflection and study.
          </p>
        </section>

        {/* Epistle Content */}
        <section className="flex flex-col gap-8 text-gray-900 mx-4 md:mx-0">
          {/* Chapter 1 */}
          <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
            <h2 className="text-2xl md:text-3xl font-semibold text-[#8b4513] border-b-2 border-dotted border-[#8b4513] pb-2 mb-6">
              Chapter 1
            </h2>
            <div className="space-y-4 leading-relaxed">
              <p><sup className="text-[#8b4513] font-semibold mr-1">1</sup>Peter, a servant of Jesus Christ and a witness of His majesty, to the elect scattered abroad: Grace be unto you, and peace from God our Father and the Lord Jesus Christ.</p>
              <p><sup className="text-[#8b4513] font-semibold mr-1">2</sup>Beloved, ye are called unto a high and holy calling, to walk in the light and not in the shadows. Therefore, be not entangled with the snares of this world, neither give place to the deceits of the ungodly.</p>
              <p><sup className="text-[#8b4513] font-semibold mr-1">3</sup>For there are foxes among you, creeping in unawares, whose mouths speak peace, but their hearts devise mischief. They flatter with their lips, yet their feet are swift to sow discord among the brethren.</p>
              <p><sup className="text-[#8b4513] font-semibold mr-1">4</sup>Be not as the blind who stumbleth at the noonday, but be sober, watching with all diligence; for the enemy worketh in subtlety, seeking whom he may devour.</p>
              <p><sup className="text-[#8b4513] font-semibold mr-1">5</sup>Some have said, The Lord delayeth His coming; let us eat and drink, for all things continue as they were. But I tell thee, they deceive themselves, for the days are numbered, and the time of recompense draweth nigh.</p>
              <p><sup className="text-[#8b4513] font-semibold mr-1">6</sup>The Lord is a righteous judge, and He shall repay the wicked in the day of His appearing. But unto the faithful He shall give a name written in the stones of Zion, which no man knoweth save he that receiveth it.</p>
              <p><sup className="text-[#8b4513] font-semibold mr-1">7</sup>Therefore, strive for righteousness, and let not the evil one take thy crown. Be not slothful in the work of the Lord, but stand fast in the faith, rooted and unshaken.</p>
              <p><sup className="text-[#8b4513] font-semibold mr-1">8</sup>Greet one another with a kiss of peace, and let no man account himself greater than his brother; for the lowly shall be lifted up, and the proud shall be as dust beneath the feet of the saints.</p>
            </div>
          </div>

          {/* Chapter 2 */}
          <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
            <h2 className="text-2xl md:text-3xl font-semibold text-[#8b4513] border-b-2 border-dotted border-[#8b4513] pb-2 mb-6">
              Chapter 2
            </h2>
            <div className="space-y-4 leading-relaxed">
              <p><sup className="text-[#8b4513] font-semibold mr-1">1</sup>Beloved, the hour is dark, and many walk as fools, having eyes that see not and ears that hear not. Be ye not counted among them.</p>
              <p><sup className="text-[#8b4513] font-semibold mr-1">2</sup>Ye have heard that in the beginning the Lord formed man from the dust; yet I say unto you, there are things which the fathers have not spoken, for the fullness of knowledge is not given unto all.</p>
              <p><sup className="text-[#8b4513] font-semibold mr-1">3</sup>Take note and watch, that you partake not in the vile and deceitful practices of the enchanters. They fill up on vain words of busy-bodies and gossips; they forbid the partaking of our Lord's supper; and they seduce the weak in mind to add to the scriptures.</p>
              <p><sup className="text-[#8b4513] font-semibold mr-1">4</sup>Such people are deserving of the Lord's wrath, and they shall not be spared in the coming judgment and fire. Their tongues are as the forked tongues of serpents, and their hands work mischief in the dark. They shall call upon the mountains to cover them, yet there shall be no hiding place.</p>
              <p><sup className="text-[#8b4513] font-semibold mr-1">5</sup>Behold, the waters bear witness, and the earth remembereth that which man hath forgotten. In the days of old, the Lord overthrew the cities of the plain for their abominations, and shall He not do so again?</p>
              <p><sup className="text-[#8b4513] font-semibold mr-1">6</sup>The just shall walk in light, but the wicked shall stumble at noonday. The Lord shall purge His house, and those who love the truth shall shine as the stars of heaven.</p>
              <p><sup className="text-[#8b4513] font-semibold mr-1">7</sup>Therefore, hold fast to the faith which was once delivered unto the saints, and be not moved by the cunning words of deceivers.</p>
              <p><sup className="text-[#8b4513] font-semibold mr-1">8</sup>If any man say unto you, Behold, I have seen the form of the Lord, ask him, Doth he bear the marks of the cross in his soul? For many shall come, speaking great things, yet they are but wind without substance.</p>
              <p><sup className="text-[#8b4513] font-semibold mr-1">9</sup>The time is at hand when the wheat shall be gathered, and the tares cast forth; therefore, let every man examine his own soul, lest he be found wanting.</p>
              <p><sup className="text-[#8b4513] font-semibold mr-1">10</sup>Be not afraid, little flock, for the Lord shall send forth His mighty ones, and they shall be as a flame in the darkness. The nations shall tremble at their voice, and the wicked shall be confounded.</p>
            </div>
          </div>

          {/* Chapter 3 */}
          <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
            <h2 className="text-2xl md:text-3xl font-semibold text-[#8b4513] border-b-2 border-dotted border-[#8b4513] pb-2 mb-6">
              Chapter 3
            </h2>
            <div className="space-y-4 leading-relaxed">
              <p><sup className="text-[#8b4513] font-semibold mr-1">1</sup>Brethren, I beseech you, be not weary in well-doing, nor let the enemy sow doubt in your hearts. The righteous shall be tried as gold in the furnace, yet the end thereof is glory.</p>
              <p><sup className="text-[#8b4513] font-semibold mr-1">2</sup>Some have said, We have waited long, and where is the promise of His coming? But the Lord is not slow, as men count slowness, but He moveth as the shadow of the great cedars—seen not at once, but known in time.</p>
              <p><sup className="text-[#8b4513] font-semibold mr-1">3</sup>I tell thee, there is a generation that shall see wonders, and they shall dream dreams unlike those of old.</p>
              <p><sup className="text-[#8b4513] font-semibold mr-1">4</sup>In the night shall be heard a voice, and the hills shall answer, and men shall seek the heavens for a sign.</p>
              <p><sup className="text-[#8b4513] font-semibold mr-1">5</sup>The beasts shall speak in their manner, and the rivers shall clap their hands, and the stones shall cry out in the streets, Prepare ye the way of the Lord!</p>
              <p><sup className="text-[#8b4513] font-semibold mr-1">6</sup>But woe to those who say, These things are but the babblings of fools, for they shall see with their own eyes and believe too late.</p>
              <p><sup className="text-[#8b4513] font-semibold mr-1">7</sup>The heavens shall shake, and the earth shall groan as a woman in travail, and the wicked shall be as chaff before the whirlwind.</p>
              <p><sup className="text-[#8b4513] font-semibold mr-1">8</sup>Therefore, be ye watchful and gird up your loins, for the day of the Lord cometh as a thief in the night.</p>
              <p><sup className="text-[#8b4513] font-semibold mr-1">9</sup>And He shall make thee as pillars in His house, and thou shalt go no more out, and His name shall be upon thee forever.</p>
              <p><sup className="text-[#8b4513] font-semibold mr-1">10</sup>The grace of our Lord Jesus Christ be with thee, now and unto the ages of ages. Amen.</p>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="mt-12 mb-6 text-center">
        <div className="flex flex-col items-center">
          <div className="w-16 h-px bg-[#8b4513] mb-4"></div>
          <p className="text-sm text-gray-600">Presented for study and reflection</p>
          <p className="text-xs text-gray-500 mt-2"> {new Date().getFullYear()} • Historical Texts</p>
        </div>
      </footer>
    </div>
  );
}