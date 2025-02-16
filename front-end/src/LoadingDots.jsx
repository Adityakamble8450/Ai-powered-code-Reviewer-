import { motion } from "framer-motion";

const LoadingDots = () => {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', backgroundColor: '#2f2f2f' }}>
      <div style={{ display: 'flex', space: '0 8px' }}>
        {[0, 1, 2].map((i) => (
          <motion.span
            key={i}
            style={{ width: '16px', height: '16px', backgroundColor: '#3b82f6', borderRadius: '50%' }}
            animate={{ y: [-5, 5, -5] }}
            transition={{ duration: 0.6, repeat: Infinity, delay: i * 0.2 }}
          />
        ))}
      </div>
    </div>
  );
};

export default LoadingDots;
