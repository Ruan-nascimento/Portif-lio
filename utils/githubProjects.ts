/** Tipo cru retornado pela API pública do GitHub */
interface GitHubRepo {
    name: string;
    html_url: string;
    homepage?: string | null;
    description?: string | null;
    topics?: string[];
    language?: string | null;
    stargazers_count: number;
    forks_count: number;
    fork: boolean;
    archived: boolean;
    updated_at: string;
    created_at: string;
    pushed_at: string;
}

/** Interface dos projetos exibidos no portfólio */
export interface GitHubProject {
    name: string;
    repoUrl: string;
    homepage?: string;
    description: string;
    topics: string[];
    language?: string;
    stars: number;
    forks: number;
    updatedAt: string;
    createdAt: string;
}

export function useGithub() {

    async function getProjects(): Promise<GitHubProject[]> {
        try {
            const response = await fetch(
                `https://api.github.com/users/Ruan-nascimento/repos?sort=updated&per_page=100`,
                { next: { revalidate: 3600 } } // cache de 1h pra não estourar rate limit
            );

            if (!response.ok) {
                return [];
            }

            const data: GitHubRepo[] = await response.json();

            if (!data || !Array.isArray(data)) {
                return [];
            }

            const projects: GitHubProject[] = data
                .filter((repo) => {
                    // Exclui repos sem descrição
                    if (!repo.description || repo.description.trim() === "") return false;
                    // Exclui o repo de perfil
                    if (repo.name.toLowerCase() === "ruan-nascimento") return false;
                    // Exclui forks e arquivados
                    if (repo.fork || repo.archived) return false;
                    return true;
                })
                .map((repo) => ({
                    name: repo.name,
                    repoUrl: repo.html_url,
                    homepage: repo.homepage || undefined,
                    description: repo.description!,
                    topics: repo.topics ?? [],
                    language: repo.language ?? undefined,
                    stars: repo.stargazers_count,
                    forks: repo.forks_count,
                    updatedAt: repo.updated_at,
                    createdAt: repo.created_at,
                }));

            return projects;
        } catch (error) {
            return [];
        }
    }

    return {
        getProjects,
    };
}