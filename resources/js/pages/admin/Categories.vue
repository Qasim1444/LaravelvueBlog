<template>
    <div class="container mt-5">
        <div class="card shadow-sm">
            <div class="card-header bg-primary text-white d-flex justify-content-between align-items-center">
                <h5 class="mb-0">Manage Categories</h5>
                <button class="btn btn-light btn-sm" @click="getCategories">
                    <i class="bi bi-arrow-clockwise"></i> Refresh
                </button>
            </div>

            <div class="card-body">
                <!-- Add Category -->
                <form @submit.prevent="addCategory" class="row g-2 mb-4">
                    <div class="col-md-9">
                        <input
                            v-model="name"
                            type="text"
                            class="form-control"
                            placeholder="Enter new category name"
                            required
                        />
                    </div>
                    <div class="col-md-3 d-grid">
                        <button class="btn btn-success">
                            <i class="bi bi-plus-circle"></i> Add Category
                        </button>
                    </div>
                </form>

                <!-- Categories Table -->
                <div v-if="categories.length" class="table-responsive">
                    <table class="table table-hover align-middle">
                        <thead class="table-light">
                        <tr>
                            <th scope="col" style="width: 60px;">#</th>
                            <th scope="col">Category Name</th>
                            <th scope="col" style="width: 180px;">Actions</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr v-for="(cat, index) in categories" :key="cat.id">
                            <td>{{ index + 1 }}</td>
                            <td>
                                <div v-if="editId === cat.id" class="d-flex gap-2">
                                    <input
                                        v-model="editName"
                                        class="form-control form-control-sm"
                                        placeholder="Edit name"
                                    />
                                </div>
                                <span v-else>{{ cat.name }}</span>
                            </td>
                            <td>
                                <div v-if="editId === cat.id" class="btn-group btn-group-sm">
                                    <button class="btn btn-success" @click="updateCategory(cat.id)">
                                        <i class="bi bi-check-lg"></i> Save
                                    </button>
                                    <button class="btn btn-secondary" @click="cancelEdit">
                                        <i class="bi bi-x-lg"></i> Cancel
                                    </button>
                                </div>
                                <div v-else class="btn-group btn-group-sm">
                                    <button class="btn btn-warning" @click="startEdit(cat)">
                                        <i class="bi bi-pencil-square"></i> Edit
                                    </button>
                                    <button class="btn btn-danger" @click="deleteCategory(cat.id)">
                                        <i class="bi bi-trash"></i> Delete
                                    </button>
                                </div>
                            </td>
                        </tr>
                        </tbody>
                    </table>
                </div>

                <div v-else class="text-center text-muted py-4">
                    <i class="bi bi-inbox fs-3"></i>
                    <p class="mt-2 mb-0">No categories found</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import axios from 'axios';
import { ref, onMounted } from 'vue';

const categories = ref([]);
const name = ref('');
const editId = ref(null);
const editName = ref('');

// ✅ Get all categories
const getCategories = () => {
    axios.get('/categories').then((res) => {
        categories.value = res.data;
    });
};

// ✅ Add category
const addCategory = () => {
    if (!name.value.trim()) return alert('Please enter a category name.');

    axios.post('/categories', { name: name.value }).then(() => {
        name.value = '';
        getCategories();
    });
};

// ✅ Start editing
const startEdit = (cat) => {
    editId.value = cat.id;
    editName.value = cat.name;
};

// ✅ Cancel edit
const cancelEdit = () => {
    editId.value = null;
    editName.value = '';
};

// ✅ Update category
const updateCategory = (id) => {
    if (!editName.value.trim()) return alert('Name cannot be empty.');

    axios.put(`/categories/${id}`, { name: editName.value }).then(() => {
        editId.value = null;
        getCategories();
    });
};

// ✅ Delete category
const deleteCategory = (id) => {
    if (confirm('Are you sure you want to delete this category?')) {
        axios.delete(`/categories/${id}`).then(() => {
            getCategories();
        });
    }
};

// Load categories on mount
onMounted(() => {
    getCategories();
});
</script>

<style scoped>
.card {
    border-radius: 10px;
}
.table th,
.table td {
    vertical-align: middle;
}
</style>
