"use client";

import { motion, AnimatePresence } from "framer-motion";

interface SizeGuideModalProps {
    isOpen: boolean;
    onClose: () => void;
    category: "Footwear" | "Ready-to-Wear";
}

export default function SizeGuideModal({ isOpen, onClose, category }: SizeGuideModalProps) {
    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        onClick={onClose}
                        style={{
                            position: "fixed",
                            inset: 0,
                            zIndex: 100,
                            backgroundColor: "rgba(15,15,15,0.6)",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            padding: "var(--space-4)",
                        }}
                    >
                        {/* Modal */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: 20 }}
                            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                            onClick={(e) => e.stopPropagation()}
                            style={{
                                backgroundColor: "var(--color-stone)",
                                width: "100%",
                                maxWidth: 600,
                                maxHeight: "90vh",
                                overflowY: "auto",
                                boxShadow: "0 20px 40px rgba(0,0,0,0.2)",
                                display: "flex",
                                flexDirection: "column",
                            }}
                        >
                            {/* Header */}
                            <div
                                style={{
                                    display: "flex",
                                    justifyContent: "space-between",
                                    alignItems: "center",
                                    padding: "var(--space-4)",
                                    borderBottom: "1px solid rgba(15,15,15,0.08)",
                                }}
                            >
                                <h2 className="text-editorial" style={{ fontSize: "var(--text-lg)" }}>
                                    Size Guide — {category}
                                </h2>
                                <button
                                    onClick={onClose}
                                    style={{ background: "none", border: "none", cursor: "pointer", padding: 8 }}
                                >
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                                        <line x1="18" y1="6" x2="6" y2="18" />
                                        <line x1="6" y1="6" x2="18" y2="18" />
                                    </svg>
                                </button>
                            </div>

                            {/* Content */}
                            <div style={{ padding: "var(--space-4)" }}>
                                {category === "Footwear" ? (
                                    <>
                                        <p style={{ fontSize: "var(--text-base)", fontWeight: 300, marginBottom: "var(--space-6)", color: "var(--color-olive)", lineHeight: 1.6 }}>
                                            Our footwear runs true to European sizing. We recommend ordering your usual EU size. Below is a conversion chart for your reference.
                                        </p>
                                        <table style={{ width: "100%", borderCollapse: "collapse", textAlign: "left" }}>
                                            <thead>
                                                <tr style={{ borderBottom: "1px solid var(--color-noir)" }}>
                                                    <th style={{ padding: "var(--space-2) 0", fontWeight: 400, fontSize: "var(--text-sm)" }}>EU</th>
                                                    <th style={{ padding: "var(--space-2) 0", fontWeight: 400, fontSize: "var(--text-sm)" }}>US (Men)</th>
                                                    <th style={{ padding: "var(--space-2) 0", fontWeight: 400, fontSize: "var(--text-sm)" }}>UK</th>
                                                    <th style={{ padding: "var(--space-2) 0", fontWeight: 400, fontSize: "var(--text-sm)" }}>CM / JP</th>
                                                </tr>
                                            </thead>
                                            <tbody style={{ fontSize: "var(--text-sm)", fontWeight: 300 }}>
                                                {[
                                                    { eu: "39", us: "6", uk: "5.5", cm: "24.5" },
                                                    { eu: "40", us: "7", uk: "6.5", cm: "25" },
                                                    { eu: "41", us: "8", uk: "7.5", cm: "26" },
                                                    { eu: "42", us: "9", uk: "8.5", cm: "27" },
                                                    { eu: "43", us: "10", uk: "9.5", cm: "28" },
                                                    { eu: "44", us: "11", uk: "10.5", cm: "29" },
                                                ].map((row, i) => (
                                                    <tr key={row.eu} style={{ borderBottom: i === 5 ? "none" : "1px solid rgba(15,15,15,0.08)" }}>
                                                        <td style={{ padding: "var(--space-2) 0" }}>{row.eu}</td>
                                                        <td style={{ padding: "var(--space-2) 0", color: "var(--color-olive)" }}>{row.us}</td>
                                                        <td style={{ padding: "var(--space-2) 0", color: "var(--color-olive)" }}>{row.uk}</td>
                                                        <td style={{ padding: "var(--space-2) 0", color: "var(--color-olive)" }}>{row.cm}</td>
                                                    </tr>
                                                ))}
                                            </tbody>
                                        </table>
                                    </>
                                ) : (
                                    <>
                                        <p style={{ fontSize: "var(--text-base)", fontWeight: 300, marginBottom: "var(--space-6)", color: "var(--color-olive)", lineHeight: 1.6 }}>
                                            Our ready-to-wear pieces feature a slightly relaxed, contemporary block. Take your normal size for the intended fit, or size down for a slimmer silhouette.
                                        </p>
                                        <table style={{ width: "100%", borderCollapse: "collapse", textAlign: "left" }}>
                                            <thead>
                                                <tr style={{ borderBottom: "1px solid var(--color-noir)" }}>
                                                    <th style={{ padding: "var(--space-2) 0", fontWeight: 400, fontSize: "var(--text-sm)" }}>Size</th>
                                                    <th style={{ padding: "var(--space-2) 0", fontWeight: 400, fontSize: "var(--text-sm)" }}>Chest (CM)</th>
                                                    <th style={{ padding: "var(--space-2) 0", fontWeight: 400, fontSize: "var(--text-sm)" }}>Shoulder (CM)</th>
                                                    <th style={{ padding: "var(--space-2) 0", fontWeight: 400, fontSize: "var(--text-sm)" }}>Length (CM)</th>
                                                </tr>
                                            </thead>
                                            <tbody style={{ fontSize: "var(--text-sm)", fontWeight: 300 }}>
                                                {[
                                                    { size: "XS", chest: "100", shoulder: "43", length: "68" },
                                                    { size: "S", chest: "104", shoulder: "44", length: "70" },
                                                    { size: "M", chest: "108", shoulder: "45", length: "72" },
                                                    { size: "L", chest: "112", shoulder: "46", length: "74" },
                                                    { size: "XL", chest: "116", shoulder: "48", length: "76" },
                                                ].map((row, i) => (
                                                    <tr key={row.size} style={{ borderBottom: i === 4 ? "none" : "1px solid rgba(15,15,15,0.08)" }}>
                                                        <td style={{ padding: "var(--space-2) 0" }}>{row.size}</td>
                                                        <td style={{ padding: "var(--space-2) 0", color: "var(--color-olive)" }}>{row.chest}</td>
                                                        <td style={{ padding: "var(--space-2) 0", color: "var(--color-olive)" }}>{row.shoulder}</td>
                                                        <td style={{ padding: "var(--space-2) 0", color: "var(--color-olive)" }}>{row.length}</td>
                                                    </tr>
                                                ))}
                                            </tbody>
                                        </table>
                                    </>
                                )}
                            </div>
                        </motion.div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
}
