import React, { useEffect, useRef, useState } from 'react';

export const CustomCursor: React.FC = () => {
  const mainRef = useRef<HTMLDivElement>(null);
  const followerRef = useRef<HTMLDivElement>(null);
  const [hovered, setHovered] = useState(false);
  const [clicked, setClicked] = useState(false);

  useEffect(() => {
    let fx = 0, fy = 0, mx = 0, my = 0;
    let animId: number;

    const onMouseMove = (e: MouseEvent) => {
      mx = e.clientX;
      my = e.clientY;
      if (mainRef.current) {
        mainRef.current.style.transform = `translate(${mx}px, ${my}px)`;
      }
    };

    const onMouseDown = () => setClicked(true);
    const onMouseUp = () => setClicked(false);

    const animate = () => {
      fx += (mx - fx) * 0.1;
      fy += (my - fy) * 0.1;
      if (followerRef.current) {
        followerRef.current.style.transform = `translate(${fx}px, ${fy}px)`;
      }
      animId = requestAnimationFrame(animate);
    };

    const onEnter = () => setHovered(true);
    const onLeave = () => setHovered(false);

    const attach = () => {
      document.querySelectorAll('a, button, [role="button"], input, textarea, select, label').forEach((el) => {
        el.addEventListener('mouseenter', onEnter);
        el.addEventListener('mouseleave', onLeave);
      });
    };

    attach();
    const obs = new MutationObserver(attach);
    obs.observe(document.body, { childList: true, subtree: true });

    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mousedown', onMouseDown);
    window.addEventListener('mouseup', onMouseUp);
    animId = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mousedown', onMouseDown);
      window.removeEventListener('mouseup', onMouseUp);
      cancelAnimationFrame(animId);
      obs.disconnect();
    };
  }, []);

  return (
    <>
      {/* Curseur principal — carré japonais pivotant */}
      <div
        ref={mainRef}
        className="fixed top-0 left-0 z-[9999] pointer-events-none"
        style={{ willChange: 'transform', transform: 'translate(-100px,-100px)' }}
      >
        <div
          style={{
            width: hovered ? 8 : 6,
            height: hovered ? 8 : 6,
            transform: `translate(-50%, -50%) rotate(45deg) scale(${clicked ? 0.8 : 1})`,
            background: hovered ? '#dc2626' : '#111111',
            transition: 'width 0.2s, height 0.2s, background 0.2s, transform 0.15s',
          }}
        />
      </div>

      {/* Suiveur — cercle élégant avec label au hover */}
      <div
        ref={followerRef}
        className="fixed top-0 left-0 z-[9998] pointer-events-none"
        style={{ willChange: 'transform', transform: 'translate(-100px,-100px)' }}
      >
        <div
          style={{
            width: hovered ? 56 : 32,
            height: hovered ? 56 : 32,
            transform: `translate(-50%, -50%) scale(${clicked ? 0.88 : 1})`,
            border: hovered ? '1.5px solid #dc2626' : '1px solid rgba(17,17,17,0.25)',
            borderRadius: '50%',
            background: hovered ? 'rgba(220,38,38,0.06)' : 'transparent',
            transition: 'width 0.35s cubic-bezier(0.25,0.46,0.45,0.94), height 0.35s cubic-bezier(0.25,0.46,0.45,0.94), border 0.25s, background 0.25s, transform 0.15s',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          {hovered && (
            <span
              style={{
                fontSize: 9,
                fontWeight: 700,
                letterSpacing: '0.12em',
                color: '#dc2626',
                textTransform: 'uppercase',
                opacity: hovered ? 1 : 0,
                transition: 'opacity 0.2s',
                userSelect: 'none',
                fontFamily: 'Outfit, sans-serif',
              }}
            >
              ✦
            </span>
          )}
        </div>
      </div>
    </>
  );
};
