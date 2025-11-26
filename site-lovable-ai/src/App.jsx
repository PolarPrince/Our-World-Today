import React, { useState } from 'react'

const countryData = {
	usa: {
		name: "United States",
		flag: "🇺🇸",
		leader: "Joe Biden",
		title: "President",
		government: "Federal Presidential Republic",
		capital: "Washington, D.C.",
		population: "331 million",
		agencies: ["CIA", "FBI", "NSA", "State Department", "Treasury"],
		facts: [
			"Bicameral legislature: Senate (100) and House (435)",
			"Supreme Court with 9 justices",
			"50 states with significant autonomy",
			"Two-party dominant system",
		],
		recentEvents: "2024 Presidential election concluded with multiple policy shifts",
	},
	uk: {
		name: "United Kingdom",
		flag: "🇬🇧",
		leader: "Keir Starmer",
		title: "Prime Minister",
		government: "Parliamentary Constitutional Monarchy",
		capital: "London",
		population: "67 million",
		agencies: ["MI6", "MI5", "GCHQ", "Foreign Office", "Home Office"],
		facts: [
			"Uncodified constitution based on conventions",
			"House of Commons (650 MPs) and House of Lords",
			"Constitutional monarchy with King Charles III",
			"Westminster system model for many countries",
		],
		recentEvents: "Labour Party returned to power in 2024 elections",
	},
	france: {
		name: "France",
		flag: "🇫🇷",
		leader: "Emmanuel Macron",
		title: "President",
		government: "Semi-Presidential Republic",
		capital: "Paris",
		population: "67 million",
		agencies: ["DGSE", "DGSI", "Quai d'Orsay", "Élysée Palace"],
		facts: [
			"Dual executive: President and Prime Minister",
			"National Assembly (577) and Senate (348)",
			"Strong centralized state structure",
			"Influential in EU policy making",
		],
		recentEvents: "Political tensions following snap elections in 2024",
	},
	germany: {
		name: "Germany",
		flag: "🇩🇪",
		leader: "Olaf Scholz",
		title: "Chancellor",
		government: "Federal Parliamentary Republic",
		capital: "Berlin",
		population: "83 million",
		agencies: ["BND", "Federal Police", "Foreign Office"],
		facts: [
			"Bundestag (lower house) and Bundesrat (states)",
			"Strong federal system with 16 states",
			"Coalition governments are the norm",
			"Economic powerhouse of the EU",
		],
		recentEvents: "Coalition government navigating energy and economic challenges",
	},
	spain: {
		name: "Spain",
		flag: "🇪🇸",
		leader: "Pedro Sánchez",
		title: "Prime Minister",
		government: "Parliamentary Constitutional Monarchy",
		capital: "Madrid",
		population: "47 million",
		agencies: ["CNI", "National Police", "Guardia Civil"],
		facts: [
			"17 autonomous communities with varying powers",
			"Congress of Deputies (350) and Senate (266)",
			"Constitutional monarchy with King Felipe VI",
			"Complex territorial politics with Catalonia",
		],
		recentEvents: "Coalition government with regional nationalist parties",
	},
	china: {
		name: "China",
		flag: "🇨🇳",
		leader: "Xi Jinping",
		title: "President & General Secretary",
		government: "One-Party Socialist Republic",
		capital: "Beijing",
		population: "1.4 billion",
		agencies: ["MSS", "PLA", "State Council", "NDRC"],
		facts: [
			"Chinese Communist Party holds supreme authority",
			"National People's Congress (nearly 3,000 delegates)",
			"President serves as head of state and military",
			"Central control with provincial administration",
		],
		recentEvents: "Economic reforms amid global trade tensions",
	},
	russia: {
		name: "Russia",
		flag: "🇷🇺",
		leader: "Vladimir Putin",
		title: "President",
		government: "Federal Semi-Presidential Republic",
		capital: "Moscow",
		population: "144 million",
		agencies: ["FSB", "SVR", "GRU", "Presidential Administration"],
		facts: [
			"State Duma (450) and Federation Council (170)",
			"Strong presidential system with limited checks",
			"85 federal subjects with varying autonomy",
			"Dominant party system under United Russia",
		],
		recentEvents: "Ongoing conflict in Ukraine reshaping global relations",
	},
	india: {
		name: "India",
		flag: "🇮🇳",
		leader: "Narendra Modi",
		title: "Prime Minister",
		government: "Federal Parliamentary Republic",
		capital: "New Delhi",
		population: "1.4 billion",
		agencies: ["RAW", "IB", "CBI", "Ministry of External Affairs"],
		facts: [
			"Lok Sabha (543) and Rajya Sabha (245)",
			"Federal structure with 28 states and 8 union territories",
			"World's largest democracy by population",
			"Coalition politics common at national level",
		],
		recentEvents: "BJP maintains strong electoral performance",
	},
	japan: {
		name: "Japan",
		flag: "🇯🇵",
		leader: "Shigeru Ishiba",
		title: "Prime Minister",
		government: "Parliamentary Constitutional Monarchy",
		capital: "Tokyo",
		population: "125 million",
		agencies: ["PSIA", "MOFA", "Cabinet Office"],
		facts: [
			"House of Representatives (465) and House of Councillors (248)",
			"Constitutional monarchy with Emperor",
			"Dominant party system historically under LDP",
			"Pacifist constitution (Article 9)",
		],
		recentEvents: "Political shifts following recent leadership changes",
	},
	brazil: {
		name: "Brazil",
		flag: "🇧🇷",
		leader: "Luiz Inácio Lula da Silva",
		title: "President",
		government: "Federal Presidential Republic",
		capital: "Brasília",
		population: "215 million",
		agencies: ["ABIN", "Federal Police", "Itamaraty"],
		facts: [
			"Chamber of Deputies (513) and Federal Senate (81)",
			"26 states plus Federal District",
			"Multi-party system with coalition governments",
			"Largest economy in Latin America",
		],
		recentEvents: "Lula's return to presidency with progressive agenda",
	},
}

const challenges = [
	{ id: 1, question: "Who is the current Prime Minister of the United Kingdom?", answer: "Keir Starmer", country: "uk" },
	{ id: 2, question: "What type of government does France have?", answer: "Semi-Presidential Republic", country: "france" },
	{ id: 3, question: "What is the capital of Brazil?", answer: "Brasília", country: "brazil" },
	{ id: 4, question: "How many states does Germany have?", answer: "16", country: "germany" },
	{ id: 5, question: "Who is the current leader of India?", answer: "Narendra Modi", country: "india" }
]

export default function App() {
	const [activeTab, setActiveTab] = useState('map');
	const [selectedCountry, setSelectedCountry] = useState(null);
	const [currentChallenge, setCurrentChallenge] = useState(0);
	const [userAnswer, setUserAnswer] = useState('');
	const [challengeResult, setChallengeResult] = useState(null);
	const [score, setScore] = useState(0);
	const [email, setEmail] = useState('');
	const [subscribed, setSubscribed] = useState(false);

	const [forumPosts] = useState([
		{ id: 1, author: "GeoPoliticsNerd", country: "🇺🇸 USA", topic: "Understanding the US electoral system", replies: 12, likes: 45 },
		{ id: 2, author: "EuroExpert", country: "🇪🇺 EU", topic: "How does the European Parliament work?", replies: 8, likes: 23 },
		{ id: 3, author: "StudentIR", country: "🇪🇸 Spain", topic: "Autonomous communities vs federal states?", replies: 15, likes: 67 }
	]);

	const handleChallengeSubmit = () => {
		const challenge = challenges[currentChallenge];
		const isCorrect = userAnswer.toLowerCase().trim() === challenge.answer.toLowerCase().trim();

		setChallengeResult(isCorrect);
		if (isCorrect) {
			setScore(prev => prev + 10);
		}

		setTimeout(() => {
			if (currentChallenge < challenges.length - 1) {
				setCurrentChallenge(prev => prev + 1);
			} else {
				setCurrentChallenge(0);
			}
			setUserAnswer('');
			setChallengeResult(null);
		}, 2000);
	};

	const handleNewsletterSignup = () => {
		if (email) {
			setSubscribed(true);
			setTimeout(() => setSubscribed(false), 3000);
		}
	};

	const tabs = [
		{ id: 'map', label: 'World Map', icon: '🗺️' },
		{ id: 'challenges', label: 'Daily Challenge', icon: '🏅' },
		{ id: 'forum', label: 'Forum', icon: '💬' },
		{ id: 'newsletter', label: 'Newsletter', icon: '📧' }
	];

	return (
		<div className="min-h-screen bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900 text-white">
			<header className="bg-black bg-opacity-30 backdrop-blur-md border-b border-white border-opacity-20 p-4">
				<div className="max-w-7xl mx-auto flex items-center justify-between">
					<div className="flex items-center gap-3">
						<span className="text-3xl">🤖</span>
						<h1 className="text-2xl font-bold">Lovable AI — The World of Today</h1>
					</div>
					<div className="flex items-center gap-2 bg-pink-600 px-4 py-2 rounded-full">
						<span className="text-xl">🏆</span>
						<span className="font-semibold">{score} points</span>
					</div>
				</div>
			</header>

			<nav className="bg-black bg-opacity-20 backdrop-blur-sm border-b border-white border-opacity-10">
				<div className="max-w-7xl mx-auto flex gap-1 p-2 flex-wrap">
					{tabs.map(tab => (
						<button
							key={tab.id}
							onClick={() => setActiveTab(tab.id)}
							className={
								"flex items-center gap-2 px-4 py-2 rounded-lg transition-all " +
								(activeTab === tab.id
									? "bg-blue-500 text-white"
									: "text-blue-200 hover:bg-white hover:bg-opacity-10")
							}
						>
							<span>{tab.icon}</span>
							{tab.label}
						</button>
					))}
				</div>
			</nav>

			<main className="max-w-7xl mx-auto p-4 md:p-6">
				{activeTab === 'map' && (
					<div className="space-y-6">
						<div className="bg-white bg-opacity-10 backdrop-blur-md rounded-xl p-6 border border-white border-opacity-20">
							<h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
								<span className="text-2xl">📍</span>
								Select a Country
							</h2>
							<div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3">
								{Object.entries(countryData).map(([key, country]) => (
									<button
										key={key}
										onClick={() => setSelectedCountry(key)}
										className="bg-blue-600 hover:bg-blue-500 p-4 rounded-lg transition-all transform hover:scale-105 flex flex-col items-center gap-2"
									>
										<span className="text-4xl">{country.flag}</span>
										<span className="text-sm font-semibold text-center">{country.name}</span>
									</button>
								))}
							</div>
						</div>

						{selectedCountry && (
							<div className="bg-white bg-opacity-10 backdrop-blur-md rounded-xl p-6 border border-white border-opacity-20">
								<div className="flex items-start justify-between mb-4">
									<div>
										<h2 className="text-3xl font-bold flex items-center gap-3">
											<span className="text-5xl">{countryData[selectedCountry].flag}</span>
											{countryData[selectedCountry].name}
										</h2>
										<p className="text-blue-200 mt-1">{countryData[selectedCountry].government}</p>
									</div>
								</div>

								<div className="grid md:grid-cols-2 gap-6">
									<div className="space-y-4">
										<div className="bg-blue-800 bg-opacity-50 p-4 rounded-lg">
											<h3 className="font-semibold text-blue-200 mb-2">Current Leader</h3>
											<p className="text-xl font-bold">{countryData[selectedCountry].leader}</p>
											<p className="text-sm text-blue-200">{countryData[selectedCountry].title}</p>
										</div>

										<div className="bg-blue-800 bg-opacity-50 p-4 rounded-lg">
											<h3 className="font-semibold text-blue-200 mb-2">Basic Info</h3>
											<p><span className="text-blue-200">Capital:</span> {countryData[selectedCountry].capital}</p>
											<p><span className="text-blue-200">Population:</span> {countryData[selectedCountry].population}</p>
										</div>

										<div className="bg-blue-800 bg-opacity-50 p-4 rounded-lg">
											<h3 className="font-semibold text-blue-200 mb-2">Key Agencies</h3>
											<div className="flex flex-wrap gap-2">
												{countryData[selectedCountry].agencies.map(agency => (
													<span key={agency} className="bg-blue-600 px-3 py-1 rounded-full text-sm">{agency}</span>
												))}
											</div>
										</div>
									</div>

									<div className="space-y-4">
										<div className="bg-blue-800 bg-opacity-50 p-4 rounded-lg">
											<h3 className="font-semibold text-blue-200 mb-2">Government Structure</h3>
											<ul className="space-y-1">
												{countryData[selectedCountry].facts.map((fact, idx) => (
													<li key={idx} className="text-sm">• {fact}</li>
												))}
											</ul>
										</div>

										<div className="bg-blue-800 bg-opacity-50 p-4 rounded-lg">
											<h3 className="font-semibold text-blue-200 mb-2">Recent Events</h3>
											<p className="text-sm">{countryData[selectedCountry].recentEvents}</p>
										</div>
									</div>
								</div>
							</div>
						)}
					</div>
				)}

				{activeTab === 'challenges' && (
					<div className="bg-white bg-opacity-10 backdrop-blur-md rounded-xl p-6 border border-white border-opacity-20">
						<h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
							<span className="text-2xl">🏅</span>
							Daily Challenge
						</h2>

						<div className="max-w-2xl mx-auto space-y-6">
							<div className="bg-blue-800 bg-opacity-50 p-6 rounded-lg">
								<p className="text-sm text-blue-200 mb-2">Question {currentChallenge + 1} of {challenges.length}</p>
								<h3 className="text-xl font-bold mb-4">{challenges[currentChallenge].question}</h3>

								<div className="flex gap-2">
									<input
										type="text"
										value={userAnswer}
										onChange={(e) => setUserAnswer(e.target.value)}
										onKeyPress={(e) => e.key === 'Enter' && handleChallengeSubmit()}
										placeholder="Type your answer..."
										className="flex-1 px-4 py-2 bg-blue-900 rounded-lg border border-blue-600 focus:outline-none focus:border-blue-400"
									/>
									<button
										onClick={handleChallengeSubmit}
										className="bg-blue-600 hover:bg-blue-500 px-6 py-2 rounded-lg font-semibold transition-all"
									>
										Submit
									</button>
								</div>

								{challengeResult !== null && (
									<div className={`mt-4 p-4 rounded-lg ${challengeResult ? 'bg-green-900 bg-opacity-50 text-green-200' : 'bg-red-900 bg-opacity-50 text-red-200'}`}>
										{challengeResult ? '✓ Correct! +10 points' : `✗ Incorrect. The answer is: ${challenges[currentChallenge].answer}`}
									</div>
								)}
							</div>
						</div>
					</div>
				)}

				{activeTab === 'forum' && (
					<div className="space-y-4">
						<h2 className="text-2xl font-bold flex items-center gap-2">
							<span className="text-2xl">💬</span>
							Community Forum
						</h2>

						{forumPosts.map(post => (
							<div key={post.id} className="bg-white bg-opacity-10 backdrop-blur-md rounded-xl p-6 border border-white border-opacity-20 hover:bg-opacity-15 transition-all">
								<div className="flex items-start justify-between mb-2">
									<div>
										<h3 className="text-lg font-semibold">{post.topic}</h3>
										<p className="text-sm text-blue-300">by {post.author} {post.country}</p>
									</div>
								</div>
								<div className="flex gap-4 text-sm text-blue-200 mt-3">
									<span>💬 {post.replies} replies</span>
									<span>❤️ {post.likes} likes</span>
								</div>
							</div>
						))}
					</div>
				)}

				{activeTab === 'newsletter' && (
					<div className="max-w-2xl mx-auto">
						<div className="bg-white bg-opacity-10 backdrop-blur-md rounded-xl p-6 border border-white border-opacity-20">
							<h2 className="text-2xl font-bold mb-2 flex items-center gap-2">
								<span className="text-2xl">📧</span>
								Subscribe to Our Newsletter
							</h2>
							<p className="text-blue-200 mb-6">Stay updated with daily geopolitical insights and analysis</p>

							<div className="space-y-4">
								<input
									type="email"
									value={email}
									onChange={(e) => setEmail(e.target.value)}
									placeholder="Enter your email"
									className="w-full px-4 py-3 bg-blue-900 rounded-lg border border-blue-600 focus:outline-none focus:border-blue-400"
								/>

								<button
									onClick={handleNewsletterSignup}
									className="w-full bg-blue-600 hover:bg-blue-500 px-6 py-3 rounded-lg font-semibold transition-all"
								>
									Subscribe
								</button>

								{subscribed && (
									<div className="bg-green-900 bg-opacity-50 text-green-200 p-4 rounded-lg">
										✓ Thank you for subscribing! Check your email for confirmation.
									</div>
								)}
							</div>

							<div className="mt-6 pt-6 border-t border-white border-opacity-20">
								<h3 className="font-semibold mb-3">What you'll get:</h3>
								<ul className="space-y-2 text-sm text-blue-200">
									<li>📰 Daily geopolitical briefing</li>
									<li>🎯 In-depth analysis of major events</li>
									<li>🌐 Global political trends</li>
									<li>🔔 Breaking news alerts</li>
								</ul>
							</div>
						</div>
					</div>
				)}
			</main>

			<footer className="bg-black bg-opacity-40 border-t border-white border-opacity-20 p-6 mt-12">
				<div className="max-w-7xl mx-auto text-center text-pink-200 text-sm">
					<p>© 2024 Lovable AI — The World of Today</p>
				</div>
			</footer>
		</div>
	)
}