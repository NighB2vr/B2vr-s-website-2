document.addEventListener('DOMContentLoaded', function() {
    var learnMoreBtn = document.getElementById('learnMoreBtn');
    var moreInfo = document.getElementById('moreInfo');

    learnMoreBtn.addEventListener('click', function() {
        var isHidden = moreInfo.style.display === 'none';
        moreInfo.style.transition = 'opacity 0.3s ease';
        moreInfo.style.opacity = isHidden ? '1' : '0';
        moreInfo.style.display = 'block'; // ensure it’s visible before changing opacity
        learnMoreBtn.textContent = isHidden ? 'Show Less' : 'Learn More';
        
        setTimeout(function() {
            moreInfo.style.display = isHidden ? 'block' : 'none';
        }, 300); // delay hiding until opacity transition ends
    });

    particlesJS('particles-js', {
        particles: {
            number: {
                value: 60, // Reduced for performance
                density: {
                    enable: true,
                    value_area: 800
                }
            },
            color: {
                value: '#ff0000'
            },
            shape: {
                type: 'circle',
                stroke: {
                    width: 0,
                    color: '#000000'
                },
                polygon: {
                    nb_sides: 5
                }
            },
            opacity: {
                value: 0.5,
                anim: {
                    enable: false,
                    speed: 1,
                    opacity_min: 0.1
                }
            },
            size: {
                value: 3,
                random: true,
                anim: {
                    enable: false,
                    speed: 40,
                    size_min: 0.1
                }
            },
            line_linked: {
                enable: true,
                distance: 150,
                color: '#ff0000',
                opacity: 0.4,
                width: 1
            },
            move: {
                enable: true,
                speed: 3, // Reduced for smoother performance
                direction: 'none',
                out_mode: 'out'
            }
        },
        interactivity: {
            detect_on: 'canvas',
            events: {
                onhover: {
                    enable: true,
                    mode: 'repulse'
                },
                onclick: {
                    enable: true,
                    mode: 'push'
                },
                resize: true
            },
            modes: {
                grab: {
                    distance: 400,
                    line_linked: {
                        opacity: 1
                    }
                },
                bubble: {
                    distance: 400,
                    size: 40,
                    duration: 2,
                    opacity: 0.8,
                    speed: 3
                },
                repulse: {
                    distance: 200,
                    duration: 0.4
                },
                push: {
                    particles_nb: 4
                },
                remove: {
                    particles_nb: 2
                }
            }
        },
        retina_detect: true
    });
});
