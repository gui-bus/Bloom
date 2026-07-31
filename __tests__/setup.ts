import '@testing-library/jest-dom/vitest';
import { cleanup } from '@testing-library/react';
import { afterEach, vi } from 'vitest';
import React from 'react';

vi.mock('@iconify/react', () => ({
Icon: ({ icon, className, ...props }: any) =>
React.createElement('span', {
'data-icon': icon,
className,
...props,
}),
}));

afterEach(() => {
cleanup();

vi.clearAllMocks();
vi.restoreAllMocks();
});

class ResizeObserverMock {
observe() {}
unobserve() {}
disconnect() {}
}

global.ResizeObserver = ResizeObserverMock as any;

if (!global.PointerEvent) {
class PointerEventMock extends Event {
constructor(type: string, props?: Record<string, any>) {
super(type, props);
if (props) Object.assign(this, props);
}
}

global.PointerEvent = PointerEventMock as any;
}
