"use client";

interface SizeSelectorProps {
    sizes: string[];
    soldOutSizes: string[];
    selectedSize: string | null;
    onSelect: (size: string) => void;
}

export default function SizeSelector({
    sizes,
    soldOutSizes,
    selectedSize,
    onSelect,
}: SizeSelectorProps) {
    return (
        <div style={{ display: "flex", flexWrap: "wrap", gap: "var(--space-1)" }}>
            {sizes.map((size) => {
                const isSoldOut = soldOutSizes.includes(size);
                const isSelected = selectedSize === size;

                return (
                    <button
                        key={size}
                        onClick={() => !isSoldOut && onSelect(size)}
                        disabled={isSoldOut}
                        aria-label={`Size ${size}${isSoldOut ? " — sold out" : ""}`}
                        style={{
                            height: 44,
                            minWidth: 56,
                            padding: "0 var(--space-2)",
                            border: isSelected
                                ? "1px solid var(--color-bernstein)"
                                : "1px solid rgba(15,15,15,0.15)",
                            background: "transparent",
                            borderRadius: 0,
                            cursor: isSoldOut ? "not-allowed" : "pointer",
                            opacity: isSoldOut ? 0.3 : 1,
                            textDecoration: isSoldOut ? "line-through" : "none",
                            fontFamily: "var(--font-suisse), sans-serif",
                            fontSize: "var(--text-sm)",
                            fontWeight: 300,
                            color: "var(--color-noir)",
                            transition: "border-color var(--duration-micro) var(--ease-default)",
                        }}
                    >
                        {size}
                    </button>
                );
            })}
        </div>
    );
}
