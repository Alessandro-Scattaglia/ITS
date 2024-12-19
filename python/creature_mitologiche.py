import random
import matplotlib.pyplot as plt

# Classe Creature
class Creature:
    def __init__(self, dna=None):
        self.dna = dna if dna else [random.randint(0, 9) for _ in range(10)]
        self.energy = random.randint(50, 100)
        self.fitness = self.calculate_fitness()

    def calculate_fitness(self, environment_factor=1):
        # Il fitness è la somma del DNA moltiplicata per un fattore ambientale
        return sum(self.dna) * environment_factor

    def mutate(self):
        # Piccola mutazione casuale in un gene
        index = random.randint(0, 9)
        self.dna[index] = random.randint(0, 9)
        self.fitness = self.calculate_fitness()

# Classe Ambiente
class Environment:
    def __init__(self):
        self.generations = []
        self.environment_factor = 1  # Cambia per simulare un ambiente variabile

    def evolve(self, population, generations=50):
        fitness_history = []

        for generation in range(generations):
            # Calcola il fitness per ogni creatura con il fattore attuale
            for creature in population:
                creature.fitness = creature.calculate_fitness(self.environment_factor)

            # Selezione: le creature con fitness più alto sopravvivono
            population.sort(key=lambda x: x.fitness, reverse=True)
            survivors = population[: len(population) // 2]

            # Riproduzione: le creature sopravviventi generano figli
            children = []
            for parent in survivors:
                child = Creature(dna=parent.dna[:])  # Clona il DNA del genitore
                if random.random() < 0.2:  # Probabilità di mutazione
                    child.mutate()
                children.append(child)

            # Aggiorna la popolazione
            population = survivors + children

            # Salva il fitness medio
            avg_fitness = sum(c.fitness for c in population) / len(population)
            fitness_history.append(avg_fitness)
            print(f"Generation {generation+1}: Average Fitness = {avg_fitness:.2f}")

            # Simula variazioni ambientali
            self.environment_factor = random.uniform(0.8, 1.2)

        # Salva il progresso
        self.generations = fitness_history
        return population

    def plot_fitness(self):
        plt.plot(self.generations)
        plt.title("Evolution of Average Fitness")
        plt.xlabel("Generations")
        plt.ylabel("Average Fitness")
        plt.show()

# Simulazione
if __name__ == "__main__":
    population_size = 100
    generations = 50

    # Crea una popolazione iniziale
    population = [Creature() for _ in range(population_size)]

    # Crea l'ambiente e fai evolvere la popolazione
    env = Environment()
    final_population = env.evolve(population, generations)

    # Mostra i risultati
    env.plot_fitness()

    # Mostra la migliore creatura
    best_creature = max(final_population, key=lambda x: x.fitness)
    print("Best Creature DNA:", best_creature.dna)
    print("Best Creature Fitness:", best_creature.fitness)