// PM2 configuration for production deployment
module.exports = {
  apps: [{
    name: 'sethi-tours',
    script: 'dist/index.js',
    instances: 'max',
    exec_mode: 'cluster',
    autorestart: true,
    watch: false,
    max_memory_restart: '1G',
    env: {
      NODE_ENV: 'production',
      PORT: 5000
    },
    env_production: {
      NODE_ENV: 'production',
      PORT: process.env.PORT || 5000
    },
    error_file: './logs/err.log',
    out_file: './logs/out.log',
    log_file: './logs/combined.log',
    time: true,
    log_date_format: 'YYYY-MM-DD HH:mm:ss',
    merge_logs: true,
    // Health check configuration
    health_check_grace_period: 3000,
    // Auto-restart configuration
    min_uptime: '10s',
    max_restarts: 5,
    restart_delay: 4000,
    // Memory and CPU monitoring
    max_memory_restart: '1G',
    node_args: '--max-old-space-size=1024'
  }]
};