import { onMounted } from 'vue';

type Event = MouseEvent | TouchEvent;

const useOnClickOutside = (domElement: HTMLElement|null, handler: (event: Event) => void) => {
  onMounted(() => {
    const listener = (event: Event) => {
      if (!domElement || domElement.contains((event?.target as Node) || null)) {
        return;
      }
      handler(event);
    };

    document.addEventListener('mousedown', listener);
    document.addEventListener('touchstart', listener);

    return () => {
      document.removeEventListener('mousedown', listener);
      document.removeEventListener('touchstart', listener);
    };
  });
  return { domElement, handler };
};

export default useOnClickOutside;
