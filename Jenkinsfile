pipeline {
    agent any

    stages {
        stage('Checkout') {
            steps {
                checkout([$class: 'GitSCM',
                    branches: [[name: '*/main']],
                    userRemoteConfigs: [[url: 'https://github.com/hsilv/TechnicalTest.git']]
                ])
            }
        }

        stage('Instalar dependencias Frontend') {
            steps {
                dir('frontend') {
                    sh 'pnpm install'
                }
            }
        }

        stage('Preparar entorno Backend') {
            steps {
                dir('backend') {
                    sh 'cp .env.example .env || echo "APP_ENV=dev\nDATABASE_URL=postgresql://postgres:postgres@db:5432/todo\nJWT_SECRET_KEY=%kernel.project_dir%/config/jwt/private.pem\nJWT_PUBLIC_KEY=%kernel.project_dir%/config/jwt/public.pem\nJWT_PASSPHRASE=7c9c7fe3601a011da5b83b2f411ac858b3c76e9afa8569c825fbc48af15e62c3"\nCORS_ALLOW_ORIGIN="^https?://(localhost|127\.0\.0\.1)(:[0-9]+)?$"\nAPP_SECRET=189cc6d8d7cbc80efeb3ec3d3aab264e > .env'
                }
            }
        }

        stage('Instalar dependencias Backend') {
            steps {
                dir('backend') {
                    sh 'composer install'
                }
            }
        }

        stage('Ejecutar pruebas Frontend') {
            steps {
                dir('frontend') {
                    sh 'pnpm test'
                }
            }
        }

        stage('Ejecutar pruebas Backend') {
            steps {
                dir('backend') {
                    sh 'vendor/bin/phpunit'
                }
            }
        }

        stage('Generar reportes') {
            steps {
                junit 'backend/tests/reports/*.xml'
                junit 'frontend/tests/reports/*.xml'
            }
        }
    }

    post {
        always {
            slackSend(channel: '#tu-canal', message: "Pipeline finalizado: ${currentBuild.fullDisplayName} - ${currentBuild.result}")
        }
    }
}