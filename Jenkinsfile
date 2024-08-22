pipeline {
    agent any

    stages {
        stage('Clonar el repositorio') {
            steps {
                checkout scm
            }
        }

        stage('Instalar dependencias Frontend') {
            steps {
                dir('frontend') {
                    sh 'pnpm install'
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