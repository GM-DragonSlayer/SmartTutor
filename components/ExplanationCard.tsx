export default function ExplanationCard({ text }: { text: string }) {
  return (
    <div className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-green-500">
      <div className="flex items-center gap-2 mb-4">
        <span className="text-2xl">💡</span>
        <h3 className="text-xl font-bold text-gray-800">Explanation</h3>
      </div>
      <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
        {text.split('\n').map((paragraph, index) => (
          paragraph.trim() && (
            <p key={index} className="mb-4 last:mb-0">
              {paragraph}
            </p>
          )
        ))}
      </div>
    </div>
  );
}