/**
 * Particle animation system with performance optimizations
 */

export class ParticleSystem {
    constructor(containerId = 'particles', options = {}) {
        this.container = document.getElementById(containerId);
        this.options = {
            count: 30, // Reduced from 50 for better performance
            minDuration: 3,
            maxDuration: 6,
            minDelay: 0,
            maxDelay: 6,
            ...options
        };
        
        this.particles = [];
        this.animationId = null;
        this.isReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        
        if (!this.container) {
            console.warn('Particle container not found');
            return;
        }
        
        this.init();
    }
    
    init() {
        // Skip particles if user prefers reduced motion
        if (this.isReducedMotion) {
            return;
        }
        
        this.createParticles();
        this.startAnimation();
        
        // Listen for visibility changes to pause/resume
        document.addEventListener('visibilitychange', () => {
            if (document.hidden) {
                this.pause();
            } else {
                this.resume();
            }
        });
    }
    
    createParticles() {
        const fragment = document.createDocumentFragment();
        
        for (let i = 0; i < this.options.count; i++) {
            const particle = this.createParticle();
            fragment.appendChild(particle.element);
            this.particles.push(particle);
        }
        
        this.container.appendChild(fragment);
    }
    
    createParticle() {
        const element = document.createElement('div');
        element.className = 'particle';
        
        const duration = this.randomBetween(this.options.minDuration, this.options.maxDuration);
        const delay = this.randomBetween(this.options.minDelay, this.options.maxDelay);
        
        // Use CSS custom properties for better performance
        element.style.setProperty('--particle-left', Math.random() * 100 + '%');
        element.style.setProperty('--particle-duration', duration + 's');
        element.style.setProperty('--particle-delay', delay + 's');
        
        return {
            element,
            duration: duration * 1000,
            delay: delay * 1000,
            startTime: performance.now() + (delay * 1000)
        };
    }
    
    randomBetween(min, max) {
        return Math.random() * (max - min) + min;
    }
    
    startAnimation() {
        if (this.isReducedMotion) return;
        
        const animate = (currentTime) => {
            this.particles.forEach(particle => {
                if (currentTime >= particle.startTime) {
                    const elapsed = currentTime - particle.startTime;
                    const progress = (elapsed % particle.duration) / particle.duration;
                    
                    // Update particle position using transform for better performance
                    const y = 100 - (progress * 110); // Move from bottom to top
                    const rotation = progress * 360;
                    const opacity = progress < 0.1 ? progress * 10 : 
                                  progress > 0.9 ? (1 - progress) * 10 : 1;
                    
                    particle.element.style.transform = 
                        `translateY(${y}vh) rotate(${rotation}deg)`;
                    particle.element.style.opacity = opacity;
                }
            });
            
            this.animationId = requestAnimationFrame(animate);
        };
        
        this.animationId = requestAnimationFrame(animate);
    }
    
    pause() {
        if (this.animationId) {
            cancelAnimationFrame(this.animationId);
            this.animationId = null;
        }
    }
    
    resume() {
        if (!this.animationId && !this.isReducedMotion) {
            this.startAnimation();
        }
    }
    
    destroy() {
        this.pause();
        this.particles.forEach(particle => {
            if (particle.element.parentNode) {
                particle.element.parentNode.removeChild(particle.element);
            }
        });
        this.particles = [];
    }
    
    // Update particle count dynamically
    updateParticleCount(newCount) {
        const currentCount = this.particles.length;
        
        if (newCount > currentCount) {
            // Add more particles
            const fragment = document.createDocumentFragment();
            for (let i = currentCount; i < newCount; i++) {
                const particle = this.createParticle();
                fragment.appendChild(particle.element);
                this.particles.push(particle);
            }
            this.container.appendChild(fragment);
        } else if (newCount < currentCount) {
            // Remove particles
            const toRemove = this.particles.splice(newCount);
            toRemove.forEach(particle => {
                if (particle.element.parentNode) {
                    particle.element.parentNode.removeChild(particle.element);
                }
            });
        }
        
        this.options.count = newCount;
    }
}

// Auto-adjust particle count based on device performance
export function getOptimalParticleCount() {
    const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    const isLowEnd = navigator.hardwareConcurrency && navigator.hardwareConcurrency <= 2;
    const hasLowMemory = navigator.deviceMemory && navigator.deviceMemory <= 2;
    
    if (isMobile || isLowEnd || hasLowMemory) {
        return 15; // Fewer particles for low-end devices
    }
    
    return 30; // Standard count for desktop/high-end devices
}

export default ParticleSystem;