import Link from "next/link";

interface BreadcrumbItem {
    label: string;
    href?: string;
}

interface BreadcrumbProps {
    items: BreadcrumbItem[];
}

export default function Breadcrumb({ items }: BreadcrumbProps) {
    return (
        <nav aria-label="Breadcrumb" style={{ marginBottom: "var(--space-3)" }}>
            <ol
                style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "var(--space-1)",
                    listStyle: "none",
                    padding: 0,
                    margin: 0,
                }}
            >
                {items.map((item, index) => (
                    <li
                        key={index}
                        style={{
                            display: "flex",
                            alignItems: "center",
                            gap: "var(--space-1)",
                            fontSize: 11,
                            fontWeight: 300,
                            letterSpacing: "0.08em",
                            textTransform: "uppercase",
                            color: "var(--color-olive)",
                        }}
                    >
                        {index > 0 && <span style={{ opacity: 0.4 }}>/</span>}
                        {item.href ? (
                            <Link
                                href={item.href}
                                style={{
                                    color: "var(--color-olive)",
                                    transition: "color var(--duration-micro) var(--ease-default)",
                                }}
                            >
                                {item.label}
                            </Link>
                        ) : (
                            <span style={{ opacity: 0.6 }}>{item.label}</span>
                        )}
                    </li>
                ))}
            </ol>
        </nav>
    );
}
