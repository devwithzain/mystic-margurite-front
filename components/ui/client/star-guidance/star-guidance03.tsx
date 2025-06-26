import Image from "next/image";
import { guide03 } from "@/public";
import { RoundButton, AnimatedText, TextMask } from "@/components/ui/client";

export default function StarGuidance03() {
	return (
		<div className="w-full padding-y padding-x">
			<div className="flex items-center justify-center flex-col gap-10">
				<div className="w-full flex items-center gap-10 flex-col">
					<div className="w-full flex items-center justify-center gap-10">
						<div className="flex-1">
							<Image
								src={guide03}
								alt="A Timely Tune-Up"
								className="w-full h-full object-cover"
							/>
						</div>
						<div className="flex-1 flex flex-col gap-5">
							<div className="">
								<AnimatedText
									text="A Timely Tune-Up"
									className="text-[#2E073F] heading font-semibold papyrus leading-tight"
								/>
							</div>
							<p className="text-black paragraph font-normal montserrat leading-loose tracking-normal">
								<TextMask>
									{[
										"Personal characteristics as described by birth horoscope patterns continue to leave an imprint throughout our life, as expressed through our behaviors, habits and choices. Aspects made by progressed and transiting planets to the natal chart can show us how the potentials described in the natal chart might be expressed today and on into the future. Weirdly enough these cosmic designs can provide clues to the workings of ones own inner state of being, while also delineating the nature of challenges and opportunities that are likely to arise from the external environment.",
									]}
								</TextMask>
							</p>
							<p className="text-black paragraph font-normal montserrat leading-loose tracking-normal">
								<TextMask>
									{[
										"To some extent we are inferring to a karmic inner state of causality which in turn draws an outer response in the form of fateful circumstances entering ones life. One popular axiom asserts that 'we are co-creators' in the game of manifestation; if this is true, than why don't we always get just what we think we want? Why the pain and frustrations that so often accompany the common lot in life? Astrology can address these concerns and provide a blueprint for action when the general pace of life is getting too confusing for comfort or when one is at a crossroads and choices need to be made.",
									]}
								</TextMask>
							</p>
						</div>
					</div>
					<div className="w-full flex items-center justify-center">
						<p className="text-black subHeading font-semibold montserrat leading-loose tracking-normal">
							<TextMask>{["Part I: Secondary Progressions"]}</TextMask>
						</p>
					</div>
					<div className="flex flex-col gap-4">
						<p className="text-black paragraph font-normal montserrat leading-loose tracking-normal">
							<TextMask>
								{[
									"Secondary progressions are determined by noting the position of natal chart planets and points as they move in time, counting roughly a day for each year of life. A progressed horoscope chart can give us additional information about what is going on within ourselves; when progressions are in aspect to key points of the natal chart one can be sure that some process of personal change and growth is actively underway. Studying this map of internal process is useful because before we put change into outer life expression through action, we go through alchemical changes in our soul, psyche and/or body first. Getting in contact with one's own inner state of being can actually be quite difficult due to outer distractions or inner unconsciousness; the progressions can provide valuable clues and triggers to shed some light on the situation.",
								]}
							</TextMask>
						</p>
						<p className="text-black paragraph font-normal montserrat leading-loose tracking-normal">
							<TextMask>
								{[
									"Often the unconscious is directing our behavior, especially if the psyche is split and the contents are organized as separated components. Schizophrenics are not being discussed here; mundane psychology postulates that the average person becomes split out in mind to a greater or lessor degree as a necessary response to the domestication conditioning that goes along with civilized life.(1) Generally speaking, the greater and more elaborate the splitting, the more trauma and survival crises were likely involved in early childhood. The splitting commonly occurs as a protective response to emotional reactions and sensations involved around getting domesticated, ensuring survival and getting love-or not.",
								]}
							</TextMask>
						</p>
						<p className="text-black paragraph font-normal montserrat leading-loose tracking-normal">
							<TextMask>
								{[
									"One convenient way of dealing with overwhelming sensations or feelings (the body is always right, unless numbed down by the ego or hardwired to a love = pain program) is to repress them, perhaps in hopes of making sense of it all later. Unfortunately, over time repression turns into an automatic habit, cultivated along with a fundamental inability to speak with clarity, express emotions safely or deal with one's needs. Note also that in many cultures women, children and poor people would be punished for displaying these features of behavior anyway. An inability to assert self effectively is directly connected to an inability to maintain healthy boundaries for self and with others. Classically we then reach a point where we start to compensate; one hand doth not know what the other is doing; weird and self-sabotaging behaviors erupt in spite of conscious intentions to steer a steady ship and be in compliance. Not to worry, the socially approved panacea of self-medication can install a faxsimile of appropriate behavior for awhile longer.",
								]}
							</TextMask>
						</p>
						<p className="text-black paragraph font-normal montserrat leading-loose tracking-normal">
							<TextMask>
								{[
									"Some of us don't even know what boundaries are; here lies a fertile playground for violator and victim; notice that dominance and submission roles have social approval, as reflected in the worship of power and generally shaky support of womens' rights, for example. We can opt out for alienation (not talking to anyone is easier) or fall back on tradition, especially for sexualized role playing. We can rely on some combination of parents/school/church/peers/media to tell us what to do, be, believe, reproduce, think and feel. These institutions are indispensable for keeping general communal order. There does come a day in a life, however, when one somehow grows beyond the container capacity of official ideologies and philosophies. Something more is needed to fill the void besides more shopping or sacrifice.",
								]}
							</TextMask>
						</p>
						<p className="text-black paragraph font-normal montserrat leading-loose tracking-normal">
							<TextMask>
								{[
									"True individuation would seem to start in earnest when we attach sufficient value to awakening and owning our own unique inner being; we may strive to realize concrete products from our own creative drive or embark on our own quest for a sensate spiritual connection from within. Individualization has nothing to do with simply rebelling or reacting away from parental dictates or establishment customs. On the other hand, going to yet another football game or getting together with the girls to mend burkas no longer quite suffices to satisfy a certain inner restlessness. According to the fathers of western psychoanalysis, healthy human beings are supposed to evolve to a stage wherein they naturally begin to deviate somewhat from the herd. Freud suggested that this development is suspect and needs to be beat back into social submission if we are to have civilization. (2) Jung suggested that a successful initiation involves the individual in learning how to integrate self with the communal order, without having to become an alienated outcast.(3) Please note that we do not all end up wrestling with this particular angel in this lifetime. One can stay asleep for two or twenty-hundred lives and not know the difference, if desired.",
								]}
							</TextMask>
						</p>
						<p className="text-black paragraph font-normal montserrat leading-loose tracking-normal">
							<TextMask>
								{[
									"Let's say the reader is one of those who has started to wake up; you will know when this is happening because the proverbial excrement will hit the fan. Life becomes progressively more chaotic; pretty much everything one was afraid of or in avoidance from, happens. At the same time, what used to work in the program and fashioned a certain sense and order out of reality no longer does. A common stop gap is to join an established belief system; when these no longer suffice you really are in danger of waking up. Eventually the waves get so choppy we are driven to do some form of active inner processing and outer asking for help.",
								]}
							</TextMask>
						</p>
						<p className="text-black paragraph font-normal montserrat leading-loose tracking-normal">
							<TextMask>
								{[
									"Along the way it helps to realize that self and much of the world is awash with Zen-like mastery in the art of faulty logic, essentially designed to control something and/or keep self-knowledge at bay. Refer to this Link for an easy guide to spotting same. Real shock can visit if realizing one may be descended from a family tradition that trains their members to be controllers or scapegoaters. Why should one give up social techniques that work so well to material advantage?",
								]}
							</TextMask>
						</p>
						<p className="text-black paragraph font-normal montserrat leading-loose tracking-normal">
							<TextMask>
								{[
									"That itchy, slimy personal kind of hands-on work tinkering with the foundations of what one takes to be their center of being can really be tiresome; in the west we live in a media propaganda bath that helps us believe the stairway to heaven can be bought instead. One can be worked over by various wave machines, electrodes, magnets or various hand-waving healing techniques that are supposed to do the job for you. Do it one, two or several times; pay good money for it. These methods can produce dramatic healing experiences, no doubt about it. But what a surprise when the same old behavioral dysfunctions, lack of meaningful relationship or chronic health problems ooze on back later wearing another face. Attempts to short-circuit the path to self-awareness and the enlightenment via regular zappage by any sort of machine, crystal or healer will not yield any lasting relief from the personal hell.",
								]}
							</TextMask>
						</p>
						<p className="text-black paragraph font-normal montserrat leading-loose tracking-normal">
							<TextMask>
								{[
									"Numerous self-help books out there can provide useful suggestions on how to do this difficult inner work. Mentioned here will only some of the most common human behaviors observed to stop the process; these include stubborn laziness, denial, engaging in busy work and reluctance to give up a perceived privilege. Another barrier is presented by the ego; it will fight hard to blinker the nascent desire to really get to know self; how to tell when this is happening? Easy, stop and notice as the mind cannot shut up-it keeps chattering. On and on, that is the ego. When one develops the ability to suspend it, that is when the process starts of getting to know just who and what one is and isn't.",
								]}
							</TextMask>
						</p>
						<p className="text-black paragraph font-normal montserrat leading-loose tracking-normal">
							<TextMask>
								{[
									"The real knotty problem is that the more we wake up, the more we are potentially responsible for living in universal truth, telling the truth (even if it can be relative in nature) and containing one's activities within certain boundaries. Containment seems to be a problem unto itself for humans; if not practicing self-limitation through some form of substance abuse or neurosis, our species behaves en masse as through it must expand to engulf all other forms of life, somewhat like a fungal culture. More than a few folks have noted to me that that this over-proliferation must be necessary to maintain the modern lifestyle; at some point there will be an Apocalypse in which everything is destroyed. Were we conditioned to embrace such a death wish during the Piscean Age?",
								]}
							</TextMask>
						</p>
						<p className="text-black paragraph font-normal montserrat leading-loose tracking-normal">
							<TextMask>
								{[
									"A concept of controlled containment in competition does not harmonize with certain features of lasse faire capitalism and the model of ever-expanding economy for sure. And why should we control our expansive tendencies when somebody else will not? The civilized world runs on a consensus physics, which for the most part does not attempt to live in contained harmony with the rest of the life forms left on the planet. Who would want to tackle that Pandora's box; much, much easier to believe nature or 'body craving' is to blame, eh? Another way to maintain business as usual is to maintain one's addiction-to depression, to existential angst, to emotional crisis, to consensus social status concerns....",
								]}
							</TextMask>
						</p>
						<p className="text-black paragraph font-normal montserrat leading-loose tracking-normal">
							<TextMask>
								{[
									"Anyway, when weary enough of ones own existential unhappiness, when unable to keep the charade up any longer even if it does pay the bills, one will one day realize that they are not their mind or their emotions. As metaphysical author Eckart Tolle puts it, the first steps to freedom consist of learning to invoke a state of non-resistance in the face of life happening just as it does, rather than transcending anything in particular (4). Habitual preoccupation with transcendence of nature is a cheat anyway, sorry; it also leaves the door open to massive abuse of earth resource because 'this place is an illusion'.",
								]}
							</TextMask>
						</p>
						<p className="text-black paragraph font-normal montserrat leading-loose tracking-normal">
							<TextMask>
								{[
									"Notice, that nature left reasonably to its own devices is a marvellously intricate, ergonomically designed and beautiful reflection of cosmic intent, besides serving as a dynamic model for natural law in motion. True, there is predator and prey out there but this necessity is contained within boundaries; there is no gratuitous violence for the hell of it, no intentional betrayals or the obsessive collection of extra 'things' for status or security. Why do we humans consider ourselves superior to nature? Our species is responsible for 98% of the content in Hell, regardless of producing artistry and architecture. Natural catastrophes do have negative impact on community order but much of that is avoidable with a little foresight and less population. No, industrial and technological progress coupled with rampant overpopulation has not made life immeasurably better. Primitive anthropologists have noted that early civilizations were quite a bit more healthy than we are today, due to lack of crowding, more exercise, uncompromised immune systems and a diversified diet of fresh foods.(5) There is an argument to be made for the hot shower and central heating, however.",
								]}
							</TextMask>
						</p>
						<p className="text-black paragraph font-normal montserrat leading-loose tracking-normal">
							<TextMask>
								{[
									"Disidentification with ego and attendant cultivation of inner Being does not translate into repression of desires or numbing of feelings either. We simply need to practice (primarily by getting up close to others and taking certain risks) how to survive the experience of feeling fully without swamping up indefinitely or dwelling on a sensation past a certain useful shelf life. This is done basically by paying attention moment to moment-staying always in the Now instead of Then, Maybe or Tomorrow. Do this simple thing enough and from within does issue forth a wisdom that naturally informs the aspirant of when enough is enough. Because when finally re-directed away from egoic self-preoccupation one becomes immediately aware of how the welfare and activity of every manifested thing is connected; and why respect for other forms of life and open space has everything to do with ensuring the long term survival of Earth.",
								]}
							</TextMask>
						</p>
						<p className="text-black paragraph font-normal montserrat leading-loose tracking-normal">
							<TextMask>
								{[
									"Via this altered state of perception a massive tweakage of the personal value system will occur. So let's say you want to exercise the prerogative of altered perception but don't have money for therapy and reading all the books hasn't helped. One of the most zen ways to reprogram self to living in the present moment involves making the commitment to grow a crop of flowers and vegetables in a garden after giving away your TV. A month into this sort of activity and you may say,'I am so bored; nothing is happening fast enough,' or 'my hands are dirty' or 'I have blisters and ache all over': rebalancing body to eliminate allergies and/or talking to different people might also be involved'. Fantastic! The plan is to make room for something else to visit the stage of your inner awareness, besides the automated life and its handmaiden, Fear.",
								]}
							</TextMask>
						</p>
						<p className="text-black paragraph font-normal montserrat leading-loose tracking-normal">
							<TextMask>
								{[
									"The garden way can train you to practice (1) stopping the constant brain chatter while giving your hands something to do; (2) stop automatically defining, categorizing labeling and judging everything contacted outside of your body; (3) lower the barriers between self, the ground and the plants; consider them as equal in status to you. Plants and many animals have a connectedness to Being that is much enhanced over most humans. Consider on a deep level the fact that God is not human. You will not get the point of the lesson either unless you first research which plants are right for the location; also learn how to prepare the soil well and study the proper use of fertilizers. Don't be cheap and use old seed. Don't expect the plants to do what you direct them to do; you are in service to them and are learning to meet them in their world. Make sure the weeds and water are regularly tended to, every day. Show up every day from spring until late fall, when the last pumpkin is pulled from the patch. Then you might be brought to a new dawn in understanding.",
								]}
							</TextMask>
						</p>
						<p className="text-black paragraph font-normal montserrat leading-loose tracking-normal">
							<TextMask>
								{[
									"Anybody who can't keep a plant alive and thriving is disconnected from nature. The rilly scary fellas keep a spindly stem and three leaves alive in a plastic pot and call it good. The average human seems to heartily disapprove of lushly growing, wildly sprawling greenery, especially where one lives or works. If the stuff is not pruned and trained to within an inch, there is suspicion of primitivism, a thug in the bushes or the Devil's work afoot. The pathology of today's cultures can be summed up in its commercial agricultural practices of intensive monocropping and heavy chemical dosage; or the average suburban landscape of lawn, tree, bush, gravel. Can anything much besides an ant can live in that? What about the well-ignored biology-class fact that a complex ecological system of great biodiversity, wherein no species predominates is much, much healthier-less disease, less disorder, no excessive violence?",
								]}
							</TextMask>
						</p>
						<p className="text-black paragraph font-normal montserrat leading-loose tracking-normal">
							<TextMask>
								{[
									"Yeah, progress comes when you are down on your knees in the garden or tending to the aquarium and you don't really have a clue; old friends have deserted you or you have left them; the family doesn't want to speak to you or you have realized that you don't need to give them any more sensative personal information. A virtual wall of rage and sorrow, often accompanied by spectacular symptoms of sickness and the most remarkable dreams, may come out willy-nilly. Because most of us do live to a greater or lessor extent in the State of De Nile, we are not really in touch with what made us the way we are and what continues to run us from the archives. Awareness of ownership in history is a most useful healing tool but in the beginning it is often painful to face. But really, the pain can stop when one also sacrifices the need to judge, shame or otherwise punish while in the process of said examination.",
								]}
							</TextMask>
						</p>
						<p className="text-black paragraph font-normal montserrat leading-loose tracking-normal">
							<TextMask>
								{[
									"Not so one can blame a parent or re-live a trauma, but so the one can get a handle on one's own templates of form; most of what we value, belive, do and be comes from the past-of the family, the ancestors and the cultural collective of which one is a member. One needs to become acquainted with where these templates came from and the reasoning behind their unique shape and operation; some of them are useful, others are not. Some rightfully belong to you, others were forced upon you as a child by another dysfunctional individual or a repressive social institution. Some of the templates are fashioned out of unprocessed emotions and needs, along with an assertive response we could not deliver without reprisal.",
								]}
							</TextMask>
						</p>
						<p className="text-black paragraph font-normal montserrat leading-loose tracking-normal">
							<TextMask>
								{[
									"Some of the most insidious templates originate in a family setting where the child is certainly 'loved and cared for' as an object but completely ignored or even negated as an individual being. Much of the stuff within got created when we were in a position of powerlessness and wanting so badly to please; therefore having no choice but to eat the shoe. That time has long since passed but years later the emotional body remains locked in its own adolescent programing. Various obsolete 'survival', 'identity' and 'definition through judgement' programs kick in routinely unless conscious awareness notices and stops the reaction. Also, If one has received heavy religious conditioning, any exercises designed to closely examine personal action and reaction can awaken the surity that one is going directly to hell.",
								]}
							</TextMask>
						</p>
						<p className="text-black paragraph font-normal montserrat leading-loose tracking-normal">
							<TextMask>
								{[
									"Take heart! Staying present with your whole enchilada of good, bad, beautiful and ugly will grow into power; the power to manage the library without it managing you. Actually, unconsciously many of us don't want personal empowerment because a lot of time, energy and creative impulse gets freed up. Then we would become responsible for realizing some of our most cherished dreams; that would involve our efforts being tempered and tested by the furnaces of life; some of our most tender ideals would have to be sacrificed in order to make something so. It also opens us up to being mutated by and tinkered with by universal intelligence, let alone other people, therefore generally lining one up for the experience of Not Being In Control of what happens. But yes, Prescilla that is where the ability to do natural Magic starts. As a bonus, the heart center is freed up so it can radiate the sure flame of unconditional Love that never leaves one ungrounded, even as life has its ups and downs.",
								]}
							</TextMask>
						</p>
						<div className="w-full flex items-center justify-center">
							<p className="text-black subHeading font-semibold montserrat leading-loose tracking-normal">
								<TextMask>
									{["Part II: Solar Arc Directions and Transits"]}
								</TextMask>
							</p>
						</div>
						<div className="w-full flex items-center justify-center gap-10">
							<div className="flex-1 flex flex-col gap-5">
								<p className="text-black paragraph font-normal montserrat leading-loose tracking-normal">
									<TextMask>
										{[
											"As a survival tool, the information contained in planetary patterns is priceless, because our own biases and blinders otherwise readily distort the picture of what is really happening out there and in here. Past that there is the realization of greater potentials, a sense of belonging to the universe, a broadening one's perspective on apparent reality that is entirely liberating.",
										]}
									</TextMask>
								</p>
								<p className="text-black paragraph font-normal montserrat leading-loose tracking-normal">
									<TextMask>
										{[
											"Solar Arc directions in astrology are determined by moving all the planets and points forward at the same rate as the Sun travels, again counting a year for a day. Directions can be interpreted as active changes initiated in response to challenges presented in the outer life; they also may represent dramatic changes and events occurring right up front and personal, brought on by factors that may be outside of personal control. Karma is not at all meant to be a punishment; often the more unpleasant manifestations would have to do with willful tendencies to be exceedingly slow about learning an important lesson. Sometimes too, priorities and values do need a serious adjustment.",
										]}
									</TextMask>
								</p>
							</div>
							<div className="flex-1">
								<Image
									src={guide03}
									alt="A Timely Tune-Up"
									className="w-full h-full object-cover"
								/>
							</div>
						</div>
						<p className="text-black paragraph font-normal montserrat leading-loose tracking-normal">
							<TextMask>
								{[
									"The bad news is, if embracing this whole process seriously, there comes a day when one no longer necessarily fits so snugly into the Civilization Program; certain situations in relationship or employment that were formerly bearable now are not. Not all aspects of civilization are bad; but some parts of it were designed and deployed towards controlling the human unit, essentially for purposes of exploitation.",
								]}
							</TextMask>
						</p>
						<p className="text-black paragraph font-normal montserrat leading-loose tracking-normal">
							<TextMask>
								{[
									"Upon gaining a sensed and felt contact with the rest of the Web of Life, certain forms of activity become outright impossible to perform, as in being any kind of an efficient sub-prime mortgage lender or polluter. In relationship situations one will no longer simply absorb others' hostility; or need to be a caretaker; or need any other insidious form of codependancy. Other forms of activity, however, become downright indispensable such as networking and coordination in timely fashion with others who are in support of one's efforts.",
								]}
							</TextMask>
						</p>
						<p className="text-black paragraph font-normal montserrat leading-loose tracking-normal">
							<TextMask>
								{[
									"Some business organizations may become untenable, unless one can be out in the field functioning fairly independently as in doing sales work. The herd and the oppressor types know when someone is different, because their electromagnetic resonance field is different. The resonance or an awakening individual is not compatible with certain types of employment and certain poisonous groupings of social interaction, even if one is the most cheerful of team players. One common reaction is to scapegoat he or she who is not resonating on the group wavelengths, especially if this one is being overly creative or particularly efficient in multi-tasking. Some may be faced with finding alternative ways of making a living that make one less of a target for projection. Take heart, some corporations are hiring highly paid consultants who claim they can think outside of the box.",
								]}
							</TextMask>
						</p>
						<p className="text-black paragraph font-normal montserrat leading-loose tracking-normal">
							<TextMask>
								{[
									"The flip side of this phenomena can involve waking up to the fact that, given the environment and society in which one was born, one is totally out of touch with practical options for survival and relationship. This format can include a formidable set of defenses crafted out of certain rosy ideals. Watch out for the belief that just because one is high-minded and pure according to their own physics, this necessarily translates into being able to realize certain expectations or indulge one's own personal sense of justice. And no, being 'good', 'pure' or 'fair' is not always the healthy choice. Because the internal pin-ball machine is loaded in favor of your ego, programmed to keep the resident sense of reality in the saddle. If the ego is predominately negative in content, the net result of action is often systematic self-sabotage, even unto death.",
								]}
							</TextMask>
						</p>
						<p className="text-black paragraph font-normal montserrat leading-loose tracking-normal">
							<TextMask>
								{[
									"We won't even bother discussing those who are actively in the business of non-responsibility, control or exploitation; like a matter-anti-matter explosion, the state of enlightened being does not exist in the same space with conditions of bi-polarity and excess so there is no point to proceeding. This sort of individual is likely to stay just as they are, for as long as perceived advantage can be procured. Much of our society functions on cruel premises that do support such advantages, via the leverage of force and/or money.",
								]}
							</TextMask>
						</p>
						<p className="text-black paragraph font-normal montserrat leading-loose tracking-normal">
							<TextMask>
								{[
									"Positive process of inner being can take on simple mundane outer expressions such as unconditional acceptance of self accompanied by greater flexibility in accepting the differences of others. Commonly a fresh release of energy propels one forward to do battle with unfinished business and unrealized goals. An inner equanimity that does not leave when one comes under pressure, takes up residence in the heart. The alternative state of choosing not to deal can be fairly negative in consequence, as when remaining emotionally unresponsive and unavailable to large chunks of sensate interface. Habitually swallowing stress and anger; dwelling in chronic depression. Denying self-love while condoning the worst self-indulgence; all these activities trickle down to the state of becoming physically or mentally ill. Punish yourself or others; that does provide temporary relief.",
								]}
							</TextMask>
						</p>
						<p className="text-black paragraph font-normal montserrat leading-loose tracking-normal">
							<TextMask>
								{[
									"It does seem that modern society does approve of certain states of psychosis and compulsion, especially those associated with higher level politics, law, weapons, big money and power. For those of us who are essentially choosing to grow the soul instead, the appearance of difficult circumstances or people in our lives can be a manifested reflection of those inner states of being we were previously choosing to ignore, repress or give short shrift. In similar manner, disturbing developments over which we have no control seem more likely to arise in direct proportion to the willful desire to consciously ignore a soul dictate for growth and expansion whose time has come.",
								]}
							</TextMask>
						</p>
						<p className="text-black paragraph font-normal montserrat leading-loose tracking-normal">
							<TextMask>
								{[
									"Other times bad things happen to good people simply because we showed up here on earth for the experience, which surely would include sampling every aspect of living from the highest to the lowest. But wait, what about those people who are getting away with murder or some equivalent thereof? Some are still very much asleep, therefore their time of being required to balance accounts has not caught up with them. Others are indeed wide awake but have made a deferred payment contract with evil, whether it wears the cloak of darkness or light. If you care to committable yourself completely to mastering the art of materialistic duality and split psyche, you too can become one of these. One way to discern whether one has such tendencies is to note if there is a habit of arguing endlessly first on one side of a proposition, then when pressed for action flip over to the opposing opinion for justification. The point of such exercise is to avoid actual penetration by life, which would certainly stop the nonsense quickly.",
								]}
							</TextMask>
						</p>
						<p className="text-black paragraph font-normal montserrat leading-loose tracking-normal">
							<TextMask>
								{[
									"An individual's state of being and path of soul growth can be symbolized by countless combinations of planetary aspects played out between the natal chart and various progressions or transits. In addition to the potential for action there is the mode and style it can take, which will certainly vary by the individual. For example, emotional longing (Moon), might provoke plans of going after an object of desire (trine Mars). A less conscious person could express this aspect by going out yet again for yet another beer. A more courageous female might finally get up the courage to ask the handsome man out on a date; he who is striving to scale the ultimate mountain may be moved to take on Tibet.",
								]}
							</TextMask>
						</p>
						<p className="text-black paragraph font-normal montserrat leading-loose tracking-normal">
							<TextMask>
								{[
									"Let's suppose we have the urge to satisfy a desire for increased social status (Jupiter) by bringing greater discipline and order to our personal affairs (opposed to Saturn). Naturally a pampered prince of Dubai would have different options for how to best channel this urge, as compared to the foreign worker who is slaving away on the prince's oil rig. The value of examining progressed planets relative to natal placements is that we may be better able to gain clarity about what those vague, nagging doubts, short temper, poor health or sudden impulse buys might be trying to tell us, so we can get on with the program. The stars can also guide us in choice and venue of program, which is also a luxury of living in an affluent corner of the globe. In some cultures and social classes, the only practical choices may consist of cultivating the wisdom of self-respect and striving for equanimity in the face of severely limiting circumstance.",
								]}
							</TextMask>
						</p>
						<p className="text-black paragraph font-normal montserrat leading-loose tracking-normal">
							<TextMask>
								{[
									"Transiting planets can act like triggers of fate when moving into major aspect with natal chart planets. The more quickly moving (relative to earth)inner planet movements certainly do not always translate into affect down on earth; they often act more as short-term local indicators that can deliver the final coup de grace by aspect to a long-term, slowly developing situation. For example the transiting Moon is often prominent by aspect to important natal planets within a few hours before or after death. Transits involving the outer planets (Uranus, Neptune and planetoid Pluto) can indicate times when significant events outside of one's control will bring on major life transformations. These visits to the burning field can seem to drag on way too long for comfort, reflective of the relatively slow progress of these outer bodies when they come into range.",
								]}
							</TextMask>
						</p>
						<p className="text-black paragraph font-normal montserrat leading-loose tracking-normal">
							<TextMask>
								{[
									"Transits can also be used to plan a course of action for the days or months ahead; much easier to move with the ebb and flow of holographic resonance rather than against. This is not to infer that the planets and their motion through space directly dictate one's personal destiny. This phenomena does exemplify how all things manifest move in fairly predictable cycles as part of the same standing wave pattern in local space and time, while in the presence of the gravity fields generated within our solar system. The laws of quantum physics indicate that the cyclic activities of all manifested phenomena do not occur in a simple vacuum disconnected from everything else. The universe exists because we are observing it from a platform of collective consensus; this consensus and the individual organism alike operate in synchronistic rhythm with the movement and properties of the planets, which themselves represent archetypes for higher creative cosmic intelligence and energy- which in turn is 'observing' and interacting with us. Because everything and everybody is an interplay between light and shadow, matter and energy states of Divine Intelligence.",
								]}
							</TextMask>
						</p>
						<p className="text-black paragraph font-normal montserrat leading-loose tracking-normal">
							<TextMask>
								{[
									"Astrologers compiled the art of delineation as we know it today from over thousands of years of celestial observation, in which it became obvious that specific planetary movements from one zodiac sign to another and/or in aspect to other heavenly bodies obviously followed in close correlation with specific types of events on here on earth, even if we do level the accusation of subjective bias in observation. The notion that 'pure' scientific observation can ever be objective is nonsense anyway, as all activity occurs relative to a consensus reality (and in these days, availability of corporate funding or religious institutional approval) anyway.",
								]}
							</TextMask>
						</p>
						<p className="text-black paragraph font-normal montserrat leading-loose tracking-normal">
							<TextMask>
								{[
									"A skilled astrologer knows it's all relative. For example, Pluto (transformation, regeneration, power) conjunct Uranus (sudden destruction, revolution) can change in meaning and relative expression in the life, depending on the era of history within which the aspect occurs and the level of individual consciousness. A free-wheeling western woman these days could therefore be free to take a Pluto-Uranus conjunction square her Neptune (spirituality, alcohol, self-delusion) to open a day spa instead of crashing her car. Three hundred years ago she stood a good chance of being burned at the stake for being a witch. Forty years ago she would be directed to bury herself in the 'burbs with a regular supply of Valium.",
								]}
							</TextMask>
						</p>
						<p className="text-black paragraph font-normal montserrat leading-loose tracking-normal">
							<TextMask>
								{[
									"Here we can wander into debate about the existence or not of God and the interplay of destiny and free will. In my opinion, no way could the complexity, interlocking contrapuntal rhythm and beauty that runs riot both in manifested life and galactic infinity be the product of random mechanical and biological particulate collisions. If this observation does not suffice, then consider that once one is freed enough from current consensus reality to live in conscious alignment with the sychronic moment, the infinite wisdom and love of Divine Intelligence is resident within self and is felt sensately and intimately within the body and mind. Most miraculous of all, a patterned contra-puntal dance of event and experience commences in the life as it is experienced through interaction with the outer environment-we are not speaking of a mere pleasant state of euphoria here.",
								]}
							</TextMask>
						</p>
						<p className="text-black paragraph font-normal montserrat leading-loose tracking-normal">
							<TextMask>
								{[
									"As for free will, until the hard work of growing soul is under way most of us are resident in about 10 to 20 percent of conscious selfhood. The rest oozes out from ancestral DNA, repressed unconscious dictates, collective consensus, social conditioning, environmental effects and the urge for a steak. To accomplish a state of being in 'higher mind' some actually perform a sort of circumcision on their ability to feel and intuit accurately. We are all watching the movie from behind certain lenses and distortions, yet blithely assume what is viewed must be real in the way the brain is cataloging what is beheld.",
								]}
							</TextMask>
						</p>
						<p className="text-black paragraph font-normal montserrat leading-loose tracking-normal">
							<TextMask>
								{[
									"But the brain's catalogue is always subjective (even and especially if you fancy yourself an Apollonian); will you claim that you are 'scientifically objective' or 'dispassionate', a 'a person of reason' or 'adhering to what the Good Book says'? Western scientific process always proceeds from a theory and a hypothesis; these are biased collective concepts to begin with; the conclusions are made to fit a preconceived reality consensus that usually serves a special interest. Scientists who attempt to operate outside of the group interest by generating findings antagonistic to the desired outcome may not continue to get funding and their career may be derailed. An excellent example of this practice can be discovered in following the progress of GM (genetics mutated) crops to the dinner table.",
								]}
							</TextMask>
						</p>
						<p className="text-black paragraph font-normal montserrat leading-loose tracking-normal">
							<TextMask>
								{[
									"If choosing the religion road, essentially the elite does not want the rabble to contract the notion that the individual is the source of his own redemption, nor entertain a suspicion that if one doesn't get it right this time one comes back and tries again. Nowhere does Jesus say that he had showed up to die for our sins, therefore absolve us of personal responsibility for our crap. Nowhere does he say that faith without works is enough to know God; neither is there mention of woman as an inferior being, gays as athymia or taking up the sword to force beliefs on others. There are numerous references to working on one's own salvation by personal trial and error, however. I suspect that because we have fashioned God and His/Her socially approved values in human image while for the most part completely discounting and disrespecting the rest of His/Her creation, the human being is likely not the absolute apple of God's eye at this time.",
								]}
							</TextMask>
						</p>
						<p className="text-black paragraph font-normal montserrat leading-loose tracking-normal">
							<TextMask>
								{[
									"We were given free will and the ability to reason in language as gifts; in the course of pursuing communal life we have used these endowments to get ensnared behind defensive walls erected against the shadow play of Love and Death that is Life. So we may collectively choose to terminate our presence on earth in a hail of fire and plague of pestilence; we even have holy texts claiming it must be so. Per the degree to which we are currently misbehaving, as a species we are in the days leading up to a final Test to be sure. In the mean time, planetary progressions and transits happen to serve as a handy tool for delineating the potential in trends, challenges and opportunities at any time, whether speaking of ecology and earthquakes, wars and weddings or one's own state of being. That ability in itself can provide evidence that we are not designed to be entities separate or dominant from the rest of existence manifest or unmanifest; awake or asleep.",
								]}
							</TextMask>
						</p>
						<p className="text-black paragraph font-normal montserrat leading-loose tracking-normal">
							<TextMask>
								{[
									"(1) The Divided Self, by R.d. Laing, Penguin Books, Inc., New York, NY. 1969.",
									"(2) The Portable Jung, edited by Joseph Campbell, Viking Penguin Books,Inc., New York, NY, 1976.",
									"(3) Civilization and Its Discontents, by Sigmund Freud.",
									"(4) The Power of Now, by Eckhart Tolle, New World Library, Novato, CA, 1999.",
									"(5) Primitivism on the Web at http://www.primitivism.com; subsection Anthropology:",
								]}
							</TextMask>
						</p>
						<p className="text-black paragraph font-normal montserrat leading-loose tracking-normal">
							<TextMask>
								{[
									'"Book Filled With Lies," and "Primitive Affluence," by Bob Black; "A Lesson in Earth Civics," by Chellis Glendinning; "The Consequences of Domestication and Sedentism," by Emily Schultz, et.al.',
								]}
							</TextMask>
						</p>
						<p className="text-black paragraph font-semibold montserrat leading-loose tracking-normal">
							<TextMask>{["© by C.M. Hafeman"]}</TextMask>
						</p>
					</div>
				</div>
			</div>
			<div className="w-fit bg-[#936d42] flex items-center justify-between bg-secondry cursor-pointer rounded-md group mt-5">
				<RoundButton
					href={`/stars/star-guidance`}
					title="Go Back"
					className="bg-white text-black"
					bgcolor="#7a74ef"
					style={{ color: "#fff" }}
				/>
			</div>
		</div>
	);
}
