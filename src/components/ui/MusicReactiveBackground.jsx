import React, { useRef, useEffect, useState, useCallback } from 'react';

// Film grain generator class
class FilmGrain {
  constructor(width, height) {
    this.width = width;
    this.height = height;
    this.grainCanvas = document.createElement('canvas');
    this.grainCanvas.width = width;
    this.grainCanvas.height = height;
    this.grainCtx = this.grainCanvas.getContext('2d');
    this.grainData = null;
    this.frame = 0;
    this.generateGrainPattern();
  }

  generateGrainPattern() {
    const imageData = this.grainCtx.createImageData(this.width, this.height);
    const data = imageData.data;
    
    for (let i = 0; i < data.length; i += 4) {
      const grain = Math.random();
      const value = grain * 255;
      data[i] = value;     // R
      data[i + 1] = value; // G
      data[i + 2] = value; // B
      data[i + 3] = 255;   // A
    }
    
    this.grainData = imageData;
  }

  update() {
    this.frame++;
    
    // Regenerate grain every few frames for animation
    if (this.frame % 2 === 0) {
      const data = this.grainData.data;
      
      for (let i = 0; i < data.length; i += 4) {
        // Create animated grain with varying intensity
        const grain = Math.random();
        const time = this.frame * 0.01;
        const x = (i / 4) % this.width;
        const y = Math.floor((i / 4) / this.width);
        
        // Add some structure to the grain for more realistic look
        const pattern = Math.sin(x * 0.01 + time) * Math.cos(y * 0.01 - time);
        const value = (grain * 0.8 + pattern * 0.2) * 255;
        
        data[i] = value;
        data[i + 1] = value;
        data[i + 2] = value;
      }
      
      this.grainCtx.putImageData(this.grainData, 0, 0);
    }
  }

  apply(ctx, intensity = 0.05, colorize = true, hue = 180) {
    ctx.save();
    
    // Apply grain with screen blend mode for lighter areas
    ctx.globalCompositeOperation = 'screen';
    ctx.globalAlpha = intensity * 0.5;
    ctx.drawImage(this.grainCanvas, 0, 0);
    
    // Apply grain with multiply for darker areas
    ctx.globalCompositeOperation = 'multiply';
    ctx.globalAlpha = 1 - (intensity * 0.3);
    ctx.drawImage(this.grainCanvas, 0, 0);
    
    // Add colored grain if specified (Neanic theme colors)
    if (colorize) {
      ctx.globalCompositeOperation = 'overlay';
      ctx.globalAlpha = intensity * 0.3;
      ctx.fillStyle = `hsla(${hue}, 70%, 50%, 1)`; // Tints toward the primary hue
      ctx.fillRect(0, 0, this.width, this.height);
    }
    
    ctx.restore();
  }

  resize(width, height) {
    this.width = width;
    this.height = height;
    this.grainCanvas.width = width;
    this.grainCanvas.height = height;
    this.generateGrainPattern();
  }
}

export const MusicReactiveBackground = () => {
  const canvasRef = useRef(null);
  const animationRef = useRef(null);
  const beamRef = useRef(null);
  
  // Since we just want the visual effect as a background (without actual audio for now),
  // we'll run it in "demo animation" mode constantly.
  
  const initCanvas = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      if (beamRef.current?.filmGrain) {
        beamRef.current.filmGrain.resize(canvas.width, canvas.height);
      }
    };
    
    const filmGrain = new FilmGrain(window.innerWidth, window.innerHeight);
    
    const beam = {
      bassIntensity: 0,
      midIntensity: 0,
      trebleIntensity: 0,
      time: 0,
      filmGrain: filmGrain,
      colorState: {
        hue: 180, // Neanic Teal
        targetHue: 180,
        saturation: 75,
        targetSaturation: 75,
        lightness: 45,
        targetLightness: 45
      },
      waves: [
        { amplitude: 40, frequency: 0.002, speed: 0.015, offset: 0, opacity: 0.8 },
        { amplitude: 30, frequency: 0.003, speed: 0.01, offset: Math.PI * 0.5, opacity: 0.6 },
        { amplitude: 20, frequency: 0.004, speed: 0.02, offset: Math.PI, opacity: 0.4 },
        { amplitude: 50, frequency: 0.0015, speed: 0.008, offset: Math.PI * 1.5, opacity: 0.5 }
      ],
      postProcessing: {
        filmGrainIntensity: 0.05,
        vignetteIntensity: 0.5,
        chromaticAberration: 0.1,
        scanlineIntensity: 0.03
      }
    };
    beamRef.current = beam;
    
    resizeCanvas();
    
    const animate = () => {
      animationRef.current = requestAnimationFrame(animate);
      
      // Clear canvas with slight fade for motion blur
      // Using the background color of the site for seamless blending
      const computedStyle = getComputedStyle(document.body);
      // We assume dark mode / dark background for this effect to look best
      ctx.fillStyle = 'rgba(10, 15, 20, 0.9)'; 
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      
      // Demo animation values (simulating audio)
      beam.bassIntensity = 0.3 + Math.sin(beam.time * 0.01) * 0.2;
      beam.midIntensity = 0.2 + Math.sin(beam.time * 0.015) * 0.15;
      beam.trebleIntensity = 0.1 + Math.sin(beam.time * 0.02) * 0.1;
      
      // Gently drift colors near the Neanic primary/secondary colors (teal -> blue)
      beam.colorState.targetHue = 180 + Math.sin(beam.time * 0.005) * 40; 
      
      // Smooth color transitions
      beam.colorState.hue += (beam.colorState.targetHue - beam.colorState.hue) * 0.05;
      
      beam.time++;
      
      const centerY = canvas.height * 0.6; // Shift slightly down to sit behind hero content nicely
      
      // Draw waves
      beam.waves.forEach((wave, waveIndex) => {
        wave.offset += wave.speed * (1 + beam.bassIntensity * 0.5);
        
        const dynamicAmplitude = wave.amplitude * (1 + beam.bassIntensity * 3);
        const waveHue = beam.colorState.hue + waveIndex * 10;
        
        const gradient = ctx.createLinearGradient(0, centerY - dynamicAmplitude * 2, 0, centerY + dynamicAmplitude * 2);
        const alpha = wave.opacity * (0.6 + beam.bassIntensity * 0.4);
        
        gradient.addColorStop(0, `hsla(${waveHue}, ${beam.colorState.saturation}%, ${beam.colorState.lightness}%, 0)`);
        gradient.addColorStop(0.5, `hsla(${waveHue}, ${beam.colorState.saturation}%, ${beam.colorState.lightness + 10}%, ${alpha})`);
        gradient.addColorStop(1, `hsla(${waveHue}, ${beam.colorState.saturation}%, ${beam.colorState.lightness}%, 0)`);
        
        ctx.beginPath();
        for (let x = -50; x <= canvas.width + 50; x += 4) {
          const y1 = Math.sin(x * wave.frequency + wave.offset) * dynamicAmplitude;
          const y2 = Math.sin(x * wave.frequency * 2 + wave.offset * 1.5) * (dynamicAmplitude * 0.4 * beam.midIntensity);
          const y = centerY + y1 + y2;
          
          if (x === -50) ctx.moveTo(x, y);
          else ctx.lineTo(x, y);
        }
        
        ctx.lineTo(canvas.width + 50, canvas.height);
        ctx.lineTo(-50, canvas.height);
        ctx.closePath();
        
        ctx.fillStyle = gradient;
        ctx.fill();
        
        // Add glowing top edge to wave
        ctx.strokeStyle = `hsla(${waveHue}, 80%, 70%, ${alpha * 1.5})`;
        ctx.lineWidth = 2;
        ctx.stroke();
      });
      
      // 1. Film grain
      beam.filmGrain.update();
      beam.filmGrain.apply(ctx, beam.postProcessing.filmGrainIntensity, true, beam.colorState.hue);
      
      // 2. Scanlines
      ctx.strokeStyle = `rgba(0, 0, 0, ${beam.postProcessing.scanlineIntensity})`;
      ctx.lineWidth = 1;
      for (let y = 0; y < canvas.height; y += 4) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(canvas.width, y);
        ctx.stroke();
      }
      
      // 3. Vignette
      const vignette = ctx.createRadialGradient(
        canvas.width / 2, canvas.height / 2, canvas.width * 0.2,
        canvas.width / 2, canvas.height / 2, canvas.width * 0.8
      );
      vignette.addColorStop(0, 'rgba(0,0,0,0)');
      vignette.addColorStop(1, 'rgba(0,0,0,0.6)');
      ctx.fillStyle = vignette;
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      
      // 4. Subtle particles/dust
      if (Math.random() < 0.05) {
        const dustCount = Math.floor(Math.random() * 3) + 1;
        for (let i = 0; i < dustCount; i++) {
          const x = Math.random() * canvas.width;
          const y = Math.random() * canvas.height;
          const size = Math.random() * 1.5 + 0.5;
          
          ctx.fillStyle = `rgba(255, 255, 255, ${Math.random() * 0.4})`;
          ctx.beginPath();
          ctx.arc(x, y, size, 0, Math.PI * 2);
          ctx.fill();
        }
      }
    };
    
    animate();
    
    window.addEventListener('resize', resizeCanvas);
    
    return () => {
      window.removeEventListener('resize', resizeCanvas);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);

  useEffect(() => {
    const cleanup = initCanvas();
    return cleanup;
  }, [initCanvas]);

  return (
    <canvas 
      ref={canvasRef} 
      className="absolute inset-0 w-full h-full object-cover -z-10 bg-[#0a0f14]"
      style={{ touchAction: "none" }}
    />
  );
};

export default MusicReactiveBackground;
