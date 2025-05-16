<script>
import ToggleSubmit from "@/components/base/ToggleSubmit.vue";

export default {
    name: "CategoryCut",
    components: {
        ToggleSubmit,
    },
    data() {
        return {
            categories: [],
            newCategoryName: "",
        };
    },
    mounted() {
        this.getCategoryList();
    },
    computed: {
        createtag() {
            const tags = new Set();
            this.list.forEach((post) => {
                if (post.category && post.category.length > 0) {
                    post.category.forEach((cat) => tags.add(cat.name));
                }
            });
            return [...tags];
        },
        filteredList() {
            if (!this.filterTag) return this.list;
            return this.list.filter((post) => post.category?.some((c) => c.name === this.filterTag));
        },
    },

    methods: {
        async getCategoryList() {
            try {
                const res = await this.$axios.post("/api/categorylist/list");
                if (res.data.success) {
                    this.categories = res.data.categoryList;
                }
            } catch (err) {
                console.error("카테고리 불러오기 실패:", err);
            }
        },
        async deleteCategory(id) {
            if (!confirm("정말 삭제하시겠습니까?")) return;

            try {
                const res = await this.$axios.delete(`/api/category/${id}`);
                if (res.data.success) {
                    this.categories = this.categories.filter((c) => c.id !== id);
                }
            } catch (err) {
                console.error("삭제 실패:", err);
            }
        },
        async createCategory() {
            if (!this.newCategoryName.trim()) return;

            try {
                const res = await this.$axios.post("/api/category/create", {
                    name: this.newCategoryName,
                });
                if (res.data.success) {
                    this.newCategoryName = "";
                    this.getCategoryList();
                }
            } catch (err) {
                console.error("생성 실패:", err);
            }
        },
    },
};
</script>

<template>
    <v-container>
        <h1>카테고리 관리</h1>
        <ToggleSubmit :to="{ name: 'home' }" class="mb-4" variant="elevated">돌아가기</ToggleSubmit>

        <v-text-field v-model="newCategoryName" label="새 태그 이름" class="mb-2" variant="underlined"></v-text-field>
        <v-btn color="primary" class="mb-4" @click="createCategory">태그 생성</v-btn>

        <v-row>
            <v-col v-for="category in categories" :key="category.id" cols="12" md="4" class="d-flex align-center">
                <v-chip color="primary" class="ma-2" variant="outlined">{{ category.name }}</v-chip>
                <v-btn color="error" @click="deleteCategory(category.id)">삭제</v-btn>
            </v-col>
        </v-row>
    </v-container>
</template>
