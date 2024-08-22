pipeline {
    agent any

    stages {
        stage('Checkout') {
            steps {
                script {
                    docker.image('php:7.4-cli').inside('-v /var/run/docker.sock:/var/run/docker.sock') {
                        checkout([$class: 'GitSCM',
                            branches: [[name: '*/main']],
                            userRemoteConfigs: [[url: 'https://github.com/hsilv/TechnicalTest.git']]
                        ])
                    }
                }
            }
        }

        stage('Instalar dependencias Frontend') {
            steps {
                script {
                    docker.image('node:18').inside {
                        dir('frontend') {
                            sh 'pnpm install'
                        }
                    }
                }
            }
        }

        stage('Preparar entorno Backend') {
            steps {
                script {
                    docker.image('php:7.4-cli').inside {
                        dir('backend') {
                            sh '''
                            if [ ! -f .env.example ]; then
                                echo "APP_ENV=dev
                                DATABASE_URL=postgresql://postgres:postgres@db:5432/todo
                                JWT_SECRET_KEY=%kernel.project_dir%/config/jwt/private.pem
                                JWT_PUBLIC_KEY=%kernel.project_dir%/config/jwt/public.pem
                                JWT_PASSPHRASE=7c9c7fe3601a011da5b83b2f411ac858b3c76e9afa8569c825fbc48af15e62c3
                                CORS_ALLOW_ORIGIN=^https?://(localhost|127\\.0\\.0\\.1)(:[0-9]+)?$
                                APP_SECRET=189cc6d8d7cbc80efeb3ec3d3aab264e" > .env
                            else
                                cp .env.example .env
                            fi
                            '''
                        }
                    }
                }
            }
        }

        stage('Instalar dependencias Backend') {
            steps {
                script {
                    docker.image('php:7.4-cli').inside {
                        dir('backend') {
                            sh 'composer install'
                        }
                    }
                }
            }
        }

        stage('Ejecutar pruebas Frontend') {
            steps {
                script {
                    docker.image('node:18').inside {
                        dir('frontend') {
                            sh 'pnpm test'
                        }
                    }
                }
            }
        }

        stage('Ejecutar pruebas Backend') {
            steps {
                script {
                    docker.image('php:7.4-cli').inside {
                        dir('backend') {
                            sh 'vendor/bin/phpunit'
                        }
                    }
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
}